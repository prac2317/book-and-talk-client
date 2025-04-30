import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.37.123.241:8080/api',
  withCredentials: true, // 쿠키 전달 허용
});

export default api;
