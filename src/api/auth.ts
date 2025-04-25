import api from './api.ts';

export const login = async (email: string, password: string) => {
  const res = await api.post('/v1/auth/login', { email, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.get('/v1/auth/logout');
  return res.data;
};

export const signUp = async (nickname: string, email: string, password: string) => {
  const res = await api.post('/v1/auth/signup', {
    nickname,
    email,
    password,
  });
  return res.data;
};

export const fetchMemberId = async () => {
  const res = await api.get('/v1/auth/member');
  return res.data;
};
