import axios from 'axios';
import Endpoints from '../../common/Endpoints';

const api = axios.create({baseURL: Endpoints.baseURL});

api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API request error:', error);
    throw error;
  },
);

export default api;
