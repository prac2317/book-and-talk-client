import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as styles from './ChatRoomPage.css';
import { Client } from '@stomp/stompjs';
import axios from 'axios';
import images from '@assets/icons/images.ts';
import { format } from 'date-fns';

interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  chatRoomId: string;
  createdAt: string;
}

interface FetchMessagesResponse {
  data: ChatMessage[];
}

interface ParticipantInfo {
  memberId: string;
  nickname: string;
  imageUrl: string;
  isRoomHost: boolean;
}

interface FetchParticipantsResponse {
  data: ParticipantInfo[];
}

const ChatRoomPage = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [memberId, setMemberId] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [participants, setParticipants] = useState<ParticipantInfo[]>([]);

  const stomp = useRef(
    new Client({
      brokerURL: 'ws://localhost:8080/portfolio',
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('WebSocket connected');
        subscribe(`/topic/chat`, (message: ChatMessage) => {
          setMessages((prev) => [...prev, message]);
        });
      },
    }),
  );

  const getMemberId = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/member', {
        withCredentials: true,
      });
      console.log(response);
      setMemberId(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMemberId();
  }, []);

  useEffect(() => {
    if (!roomId) return;

    // Todo 순서 정리하기
    fetchParticipants();
    fetchMessages();
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

  const fetchParticipants = async () => {
    try {
      const response = await axios.get<FetchParticipantsResponse>(
        `http://localhost:8080/api/v1/chat/chatrooms/${roomId}/participants`,
      );
      console.log(response.data.data);
      setParticipants(response.data.data);
    } catch (e) {
      console.error('참가자를 부르는 데 실패했습니다.', e);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get<FetchMessagesResponse>(
        `http://localhost:8080/api/v1/chat/chatrooms/${roomId}/messages`,
      );
      console.log(response.data.data);
      setMessages(response.data.data);
    } catch (e) {
      console.error('참가자를 부르는 데 실패했습니다.', e);
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

    console.log(newMsg);

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
              <div className={styles.messageContent}>
                {!isMyMessage && <span className={styles.messageSender}>{sender?.nickname}</span>}
                <div className={isMyMessage ? styles.myMessageText : styles.messageText}>
                  {message.content}
                </div>
                <span className={styles.messageTime}>
                  {format(new Date(message.createdAt), 'MM/dd HH:mm')}
                </span>
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
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
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
