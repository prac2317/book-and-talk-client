import api from './api.ts';

export const fetchChatRooms = async () => {
  const res = await api.get(`/v1/chat/chatrooms`);
  return res.data;
};

export const fetchParticipants = async (roomId: string) => {
  const res = await api.get(`/v1/chat/chatrooms/${roomId}/participants`);
  return res.data;
};

export const fetchMessages = async (roomId: string) => {
  const res = await api.get(`/v1/chat/chatrooms/${roomId}/messages`);
  return res.data;
};
