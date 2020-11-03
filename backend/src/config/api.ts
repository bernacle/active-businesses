import axios from 'axios';
import Base from './host';

const api = axios.create({
  baseURL: Base.URL,
});

export default api;
