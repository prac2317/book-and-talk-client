import api from './api.ts';

export const fetchClubDetail = async (clubId: string) => {
  const res = await api.get(`/v1/clubs/${clubId}`);
  return res.data;
};

export const fetchClubMember = async (clubId: string) => {
  const res = await api.get(`/v1/clubs/${clubId}/member`);
  return res.data;
};

export const fetchVisitorClubRelation = async (clubId: string) => {
  const res = await api.get(`/v1/clubs/${clubId}/relation`);
  return res.data;
};

export const fetchClubList = async (isbn13: string) => {
  const res = await api.get('/v1/clubs', { params: { isbn13 } });
  return res.data;
};

export const fetchNearbyClubList = async (
  latitude: number,
  longitude: number,
  page: number = 0,
  size: number = 10,
) => {
  const res = await api.get('/v1/clubs/nearby', {
    params: {
      latitude,
      longitude,
      page,
      size,
    },
  });
  return res.data;
};

export const deleteClub = async (clubId: string) => {
  await api.delete(`/v1/clubs/${clubId}`);
};

export const createClub = async (data: FormData) => {
  const res = await api.post('/v1/clubs', data);
  return res.data;
};
