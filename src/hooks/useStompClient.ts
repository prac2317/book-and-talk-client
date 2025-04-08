import { useEffect, useRef, useCallback } from 'react';
import { mockMessages, mockUsers } from '../mock/chatData';
import { Client } from '@stomp/stompjs';

interface UseStompClientProps {
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: any) => void;
}

export const useStompClient = ({
  onConnect,
  onDisconnect,
  onError,
}: UseStompClientProps = {}) => {
  const subscriptions = useRef<Map<string, (message: any) => void>>(new Map());
  



  const connect = useCallback(() => {
    console.log('Mock WebSocket connected');
    onConnect?.();
  }, [onConnect]);

  const disconnect = useCallback(() => {
    console.log('Mock WebSocket disconnected');
    onDisconnect?.();
  }, [onDisconnect]);

  const subscribe = useCallback((destination: string, callback: (message: any) => void) => {
    subscriptions.current.set(destination, callback);
    return {
      unsubscribe: () => {
        subscriptions.current.delete(destination);
      },
    };
  }, []);

  const publish = useCallback((destination: string, body: any) => {
    // Mock 메시지 전송
    const callback = subscriptions.current.get(destination);
    if (callback) {
      // 1초 후에 메시지가 전송된 것처럼 시뮬레이션
      setTimeout(() => {
        callback(body);
      }, 1000);

      // 2초 후에 다른 사용자의 응답 메시지 시뮬레이션
      setTimeout(() => {
        const roomId = destination.split('/').pop();
        if (roomId) {
          const roomMessages = mockMessages[roomId];
          if (roomMessages && roomMessages.length > 0) {
            const randomUser = mockUsers.find(user => user.id !== body.senderId);
            if (randomUser) {
              const responseMessage = {
                id: Date.now().toString(),
                roomId: body.roomId,
                senderId: randomUser.id,
                content: `${randomUser.name}님이 메시지를 확인했습니다.`,
                timestamp: new Date().toISOString(),
              };
              callback(responseMessage);
            }
          }
        }
      }, 2000);
    }
  }, []);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return {
    connected: true,
    subscribe,
    publish,
  };
}; 