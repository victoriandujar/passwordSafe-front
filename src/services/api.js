import axios from 'axios';

const api = axios.create({
  baseURL: 'https://13f3-2804-431-cfef-102b-f377-a629-8065-50b2.ngrok.io',
});

export default api;