import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bookandtalk.shop/api',
  withCredentials: true, // 쿠키 전달 허용
});

export default api;
