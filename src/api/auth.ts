import api from './api.ts';

export const login = async (email: string, password: string) => {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.get('/auth/logout');
  return res.data;
};