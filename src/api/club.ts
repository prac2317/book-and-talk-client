import api from './api.ts';

interface CreateClubRequest {
  name: string;
  bookTitle: string;
  isbn13: string;
  startDate: string;
  duration: number;
  maxParticipants: number;
  clubDescription: string;
}

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

export const deleteClub = async (clubId: string) => {
  await api.delete(`/v1/clubs/${clubId}`);
};

export const createClub = async (data: CreateClubRequest) => {
  //TODO: 임시로 'yyyy-MM-dd'T'HH:mm' 형식 맞춤 -> 백엔드 바꾸고 다시 수정하기
  const newData = { ...data, startDate: `${data.startDate}T00:00` };
  const res = await api.post('/v1/clubs', newData);
  return res.data;
};
