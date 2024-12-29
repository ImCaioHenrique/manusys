import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // URL base da API
  timeout: 1000, // Tempo limite de resposta
});

export default apiClient;
