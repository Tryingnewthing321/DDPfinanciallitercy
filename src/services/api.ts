import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  getUsers: async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  },
  
  addUser: async (userData: { username: string; email: string }) => {
    const response = await axios.post(`${API_URL}/users/add`, userData);
    return response.data;
  }
}; 