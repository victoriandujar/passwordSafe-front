import axios from 'axios';

const api = axios.create({
  baseURL: 'https://password-safe-fatec.herokuapp.com/api',
  headers: {
    // Authorization: "",
  },
});

// api.interceptors.request.use(async (config) => {
//   try {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   } catch (error) {
//     console.log(error);
//   }

//   return config;
// });

export default api;