import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  // baseURL: 'http://localhost:8080/api',
  withCredentials: true, // 쿠키 전달 허용
});

export default api;
