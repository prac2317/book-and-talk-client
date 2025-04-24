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
