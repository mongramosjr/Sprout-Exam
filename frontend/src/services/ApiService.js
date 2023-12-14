import axios from 'axios';

const BASE_URL = 'http://127.0.0.1';

const ApiService = {
  async login(credentials) {
    return axios.post(`${BASE_URL}/login`, credentials);
  },

  async getEmployees(token) {
    return axios.get(`${BASE_URL}/api/employees`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  // Other API service methods for CRUD operations
};

export default ApiService;
