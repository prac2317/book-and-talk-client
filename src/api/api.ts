import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  withCredentials: true, // 쿠키 전달 허용
});

export default api;