import api from './api.ts';
import axios from 'axios';

export const login = async (email: string, password: string) => {
  const res = await api.post('/v1/auth/login', { email, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.get('/auth/logout');
  return res.data;
};

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
