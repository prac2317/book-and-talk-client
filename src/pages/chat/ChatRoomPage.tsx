import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as styles from './ChatRoomPage.css';
import { Client } from '@stomp/stompjs';
import images from '@assets/icons/images.ts';
import { format } from 'date-fns';
import { fetchMemberId } from '@api/auth.ts';
import { fetchMessages, fetchParticipants } from '@api/chat.ts';

interface ChatMessage {
  id?: string;
  senderId: string;
  content: string;
  chatRoomId: string;
  createdAt: string;
}

interface ParticipantInfo {
  memberId: string;
  nickname: string;
  imageUrl: string;
  isRoomHost: boolean;
}

const ChatRoomPage = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const [memberId, setMemberId] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [participants, setParticipants] = useState<ParticipantInfo[]>([]);

  const stomp = useRef(
    new Client({
      brokerURL: `ws://${import.meta.env.VITE_BASE_URL}/portfolio`,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('WebSocket connected');
        subscribe(`/topic/chat`, (message: ChatMessage) => {
          setMessages((prev) => [...prev, message]);
        });
      },
    }),
  );

  const loadMemberId = async () => {
    try {
      const res = await fetchMemberId();
      console.log(res);
      setMemberId(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMemberId();
  }, []);

  useEffect(() => {
    if (!roomId) return;

    // Todo 순서 정리하기
    loadParticipants();
    loadMessages();
    stomp.current.activate();

    return () => {
      stomp.current.deactivate();
    };
  }, [roomId]);

  const subscribe = (destination: string, callback: (message: ChatMessage) => void) => {
    stomp.current.subscribe(destination, (message: any) => {
      callback(JSON.parse(message.body));
    });
  };

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

  const loadParticipants = async () => {
    if (!roomId) return;

    try {
      const res = await fetchParticipants(roomId);
      console.log(res.data);
      setParticipants(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMessages = async () => {
    if (!roomId) return;

    try {
      const res = await fetchMessages(roomId);
      console.log(res.data);
      setMessages(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !roomId || !stomp.current.connected) {
      console.log('메세지를 보낼 수 없습니다.');
      return;
    }

    const newMsg: ChatMessage = {
      chatRoomId: roomId,
      senderId: memberId,
      content: newMessage,
      createdAt: new Date().toISOString(),
    };

    publish('/app/chat', JSON.stringify(newMsg));

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
        <div className={styles.backIcon}>
          <img
            src={images.backBlackImage}
            alt="back"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <h2 className={styles.headerTitle}>채팅방</h2>
        <div>
          <images.SearchGlass className={styles.searchGlassIcon} />
        </div>
      </div>

      <div className={styles.messageList}>
        {messages.map((message) => {
          const isMyMessage = message.senderId === memberId;
          console.log('memberId', memberId, typeof memberId);
          console.log('senderId', message.senderId, typeof message.senderId);
          console.log(isMyMessage);
          const sender = participants.find(
            (participant) => participant.memberId === message.senderId,
          );

          return (
            <div
              key={message.createdAt}
              className={isMyMessage ? styles.myMessage : styles.messageItem}
            >
              <img
                src={sender?.imageUrl ? sender?.imageUrl : images.memberImage}
                alt={message.senderId}
                className={styles.profileImage}
              />
              {!isMyMessage && (
                <div className={styles.messageContent}>
                  <div>
                    <span className={styles.messageSender}>{sender?.nickname}</span>
                    <div className={styles.messageText}>{message.content}</div>
                  </div>
                  <span className={styles.messageTime}>
                    {format(new Date(message.createdAt), 'HH:mm')}
                  </span>
                </div>
              )}
              {isMyMessage && (
                <div className={styles.messageContent}>
                  <span className={styles.messageTime}>
                    {format(new Date(message.createdAt), 'HH:mm')}
                  </span>
                  <div>
                    <div className={styles.myMessageText}>{message.content}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <textarea
          className={styles.input}
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력해주세요."
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
