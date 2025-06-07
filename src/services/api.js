import axios from 'axios';

// A API para json-server local
const api = axios.create({
  baseURL: 'http://localhost:3001', 
});

export const getItens = () => api.get('/itens');
export const addItem = (item) => api.post('/itens', item);
export const removeItem = (id) => api.delete(`/itens/${id}`);

export default api;