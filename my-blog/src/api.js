import axios from 'axios';
import { API_BASE_URL } from './constants';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export async function request(config = {}) {
    const response = await api.request(config);

    return response.data;
}

export default api;
