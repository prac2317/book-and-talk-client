import { useNavigate } from 'react-router-dom';
import * as styles from './ChatListPage.css';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import images from '@assets/icons/images.ts';
import { fetchChatRooms } from '@api/chat.ts';

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
    loadChatRooms();
  }, []);

  const loadChatRooms = async () => {
    try {
      const res = await fetchChatRooms();
      console.log(res.data);
      setChatRooms(res.data);
    } catch (error) {
      console.error('채팅룸 호출 실패', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>채팅</h2>
      </div>

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
