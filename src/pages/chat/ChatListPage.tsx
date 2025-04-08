import { useNavigate } from 'react-router-dom';
import * as styles from './ChatListPage.css';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';

interface ChatRoom {
  id: string;
  name: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount: number;
  participants: string[];
}

const ChatListPage = () => {
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  const handleChatRoomClick = (roomId: string) => {
    navigate(`/chat/${roomId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>채팅방 목록</h1>
      <div className={styles.chatList}>
        {chatRooms.map((room) => (
          <div
            key={room.id}
            className={styles.chatItem}
            onClick={() => handleChatRoomClick(room.id)}
          >
            <img
              src={`https://i.pravatar.cc/150?img=${room.id}`}
              alt={room.name}
              className={styles.profileImage}
            />
            <div className={styles.chatInfo}>
              <div className={styles.chatHeader}>
                <span className={styles.chatName}>{room.name}</span>
                {room.lastMessageTime && (
                  <span className={styles.chatTime}>
                    {format(new Date(room.lastMessageTime), 'MM/dd HH:mm', { locale: ko })}
                  </span>
                )}
              </div>
              <div className={styles.chatMessage}>
                {room.lastMessage}
                {room.unreadCount > 0 && (
                  <span className={styles.unreadCount}>{room.unreadCount}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatListPage;
