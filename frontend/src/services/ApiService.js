import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

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

  getEmployeeById(id, token) {
    return axios.get(`${BASE_URL}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addEmployee(employeeData, token) {
    return axios.post(`${BASE_URL}/employees`, employeeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updateEmployee(id, employeeData, token) {
    return axios.put(`${BASE_URL}/employees/${id}`, employeeData , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deleteEmployee(id, token) {
    return axios.delete(`${BASE_URL}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default ApiService;
