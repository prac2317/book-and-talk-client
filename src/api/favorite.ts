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

export const fetchClubFavoriteList = async () => {
  const res = await api.get('/v1/favorites/clubs');
  return res.data;
};

export const fetchBookFavorite = async (isbn13: string) => {
  const res = await api.get(`/v1/favorites/books/relation`, {
    params: { isbn13 },
  });
  return res.data;
};

export const postBookFavorite = async (isbn13: string) => {
  await api.post(`/v1/favorites/books`, { isbn13 });
};

export const deleteBookFavorite = async (isbn13: string) => {
  await api.delete(`/v1/favorites/books/${isbn13}`);
};

export const fetchbookFavoriteList = async () => {
  const res = await api.get('/v1/favorites/books');
  return res.data;
};
