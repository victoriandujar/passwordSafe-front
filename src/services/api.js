import axios from 'axios';

const api = axios.create({
  baseURL: 'https://password-safe-fatec.herokuapp.com/api',
});

export default api;