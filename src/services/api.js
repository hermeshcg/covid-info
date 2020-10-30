import axios from 'axios';

const api = axios.create({
  baseURL: 'disease.sh',
});

export default api;
