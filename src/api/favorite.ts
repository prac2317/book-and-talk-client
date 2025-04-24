import api from './api.ts';

export const fetchClubFavorite = async (clubId: string) => {
  const res = await api.get(`/v1/favorites/clubs/relation`, {
    params: { clubId },
  });
  return res.data;
};

export const postClubFavorite = async (clubId: string) => {
  const res = await api.post(`/v1/favorites/clubs`, { clubId });
  return res.data;
};

export const deleteClubFavorite = async (clubId: string) => {
  const res = await api.delete(`/v1/favorites/clubs/${clubId}`);
  return res.data;
};
