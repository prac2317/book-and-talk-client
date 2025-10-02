import api from './api.ts';

export const fetchNotificationList = async (memberId: string) => {
  const res = await api.get('/notifications', {
    params: { memberId },
  });
  return res.data;
};
