import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3334',
    // baseURL: 'http://10.0.2.2:3334',
});

export default api;
