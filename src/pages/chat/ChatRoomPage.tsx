import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as styles from './ChatRoomPage.css';
import { Client } from '@stomp/stompjs';

interface ChatMessage {
  id?: string;
  chatRoomId: string;
  senderId: string;
  content: string;
  createdAt: string;
}

const CURRENT_USER_ID = '1';

const ChatRoomPage = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const stomp = useRef(new Client({
    brokerURL: 'ws://localhost:8080/portfolio',
    reconnectDelay: 5000,
    onConnect: () => {
        console.log('WebSocket connected');
        subscribe(`/topic/chat`, (message: ChatMessage) => {
          setMessages((prev) => [...prev, message]);
        });
    },
  }));
  
  useEffect(() => {
    console.log("messages", messages);
  }, [messages]);

  useEffect(() => {
    if (!roomId) return;

    stomp.current.activate();

    return () => {
      stomp.current.deactivate();
  };
  }, [roomId]);

  const subscribe = ((destination: string, callback: (message: ChatMessage) => void) => {
    stomp.current.subscribe(destination, (message: any) => {
      callback(JSON.parse(message.body));
    });
  });

  const publish = (destination: string, message: string) => {
    stomp.current.publish({
      destination,
      body: message,
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !roomId || !stomp.current.connected) {
      console.log("메세지를 보낼 수 없습니다.");
      return;
    }

    const newMsg: ChatMessage = {
      chatRoomId: roomId,
      senderId: CURRENT_USER_ID,
      content: newMessage,
      createdAt: new Date().toISOString(),
    };

    // WebSocket으로 메시지 전송
    publish('/app/chat', JSON.stringify(newMsg));
    
    // 백엔드 연동 전까지는 직접 메시지 추가
    // setMessages((prev) => [...prev, newMsg]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>채팅방</h2>
      </div>

      <div className={styles.messageList}>
        {messages.map((message) => {
          const isMyMessage = message.senderId === CURRENT_USER_ID;
          // const sender = mockUsers.find((user) => user.id === message.senderId);

          return (
            <div
              key={message.createdAt}
              className={isMyMessage ? styles.myMessage : styles.messageItem}
            >
              <img
                src={message.senderId}
                alt={message.senderId}
                className={styles.profileImage}
              />
              <div className={styles.messageContent}>
                {!isMyMessage && (
                  <span className={styles.messageSender}>{message.senderId}</span>
                )}
                <div className={isMyMessage ? styles.myMessageText : styles.messageText}>
                  {message.content}
                </div>
                {/* <span className={styles.messageTime}>
                  {format(new Date(message.timestamp), 'HH:mm', { locale: ko })}
                </span> */}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <textarea
          className={styles.input}
          value={newMessage}
          onChange={
            (e) => 
              {
              setNewMessage(e.target.value)
              }
            }
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          rows={1}
        />
        <button
          className={styles.sendButton}
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatRoomPage; 