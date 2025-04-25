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
  console.log(isbn13);
  const res = await api.get('/v1/clubs', { params: { isbn13 } });
  console.log('여기서 막혔을듯');
  return res.data;
};
