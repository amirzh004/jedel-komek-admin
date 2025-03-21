import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.sen-sulu.com/api',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
});

// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('access_token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );
//
// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             // Перенаправление на страницу входа или другая логика
//             window.location.href = '/';
//         }
//         return Promise.reject(error);
//     }
// );

export default apiClient;