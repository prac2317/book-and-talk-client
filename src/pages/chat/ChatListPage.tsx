import { useNavigate } from 'react-router-dom';
import * as styles from './ChatListPage.css';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import images from '@assets/icons/images.ts';

interface ChatRoom {
  chatRoomId: number;
  image: string | null;
  name: string;
  updatedAt: string;
  memberIdList: number[];
  recentMessage: string | null;
}

interface GetChatRoomsApiResponse {
  data: ChatRoom[];
}

const ChatListPage = () => {
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  const handleChatRoomClick = (roomId: number) => {
    navigate(`/chat/${roomId}`);
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  const fetchChatRooms = async () => {
    try {
      const response = await axios.get<GetChatRoomsApiResponse>(
        `http://localhost:8080/api/v1/chat/chatrooms`,
        {
          withCredentials: true,
        },
      );

      console.log(response.data.data);
      setChatRooms(response.data.data);
    } catch (e) {
      console.error('채팅룸 호출 실패', e);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>채팅방 목록</h1>

      <div className={styles.chatList}>
        {chatRooms.map((room) => (
          <div
            key={room.chatRoomId}
            className={styles.chatItem}
            onClick={() => handleChatRoomClick(room.chatRoomId)}
          >
            <img
              src={room.image || images.clubBackgroundImage}
              alt={room.name}
              className={styles.profileImage}
            />

            <div className={styles.chatInfo}>
              <div className={styles.chatHeader}>
                <span className={styles.chatName}>{room.name}</span>

                {room.updatedAt && (
                  <span className={styles.chatTime}>
                    {format(new Date(room.updatedAt), 'MM/dd HH:mm')}
                  </span>
                )}
              </div>

              <div className={styles.chatMessage}>{room.recentMessage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatListPage;
