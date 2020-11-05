import axios from 'axios';
import urls from '../utils/config';

const api = axios.create({
  baseURL: urls.API_BASE_URL,
});

export default api;
