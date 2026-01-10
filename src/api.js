import axios from 'axios';

const baseUrl = 'http://192.168.1.100:8000/api';

const API = axios.create({
    baseURL: baseUrl,
    withCredentials: true, // important for Sanctum cookies
});

export default API;
