import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  register: async (name, email, password) => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },
  signin: async (email, password) => {
    const response = await api.post('/auth/signin', { email, password });
    return response.data;
  },
};

// Board services
export const boardService = {
  createBoard: async (title) => {
    const response = await api.post('/boards', { title });
    return response.data;
  },
  getBoards: async () => {
    const response = await api.get('/boards');
    return response.data;
  },
  getBoard: async (id) => {
    const response = await api.get(`/boards/${id}`);
    return response.data;
  },
  updateBoard: async (id, data) => {
    const response = await api.put(`/boards/${id}`, data);
    return response.data;
  },
  deleteBoard: async (id) => {
    const response = await api.delete(`/boards/${id}`);
    return response.data;
  },
};

// Card services
export const cardService = {
  createCard: async (cardData) => {
    const response = await api.post('/cards', cardData);
    return response.data;
  },
  getCards: async (boardId) => {
    const response = await api.get(`/cards?boardId=${boardId}`);
    return response.data;
  },
  updateCard: async (id, data) => {
    const response = await api.put(`/cards/${id}`, data);
    return response.data;
  },
  deleteCard: async (id) => {
    const response = await api.delete(`/cards/${id}`);
    return response.data;
  },
};

export default api;
