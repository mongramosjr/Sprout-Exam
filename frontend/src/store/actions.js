import ApiService from '../services/ApiService';

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await ApiService.login(credentials);
      //const token = response.data.token
      console.log(JSON.stringify(response));
      commit('SET_TOKEN', response.data.access_token);
    } catch (error) {
      console.error(`Error in login`, error);
    }
  },

  async fetchEmployees({ commit, state }) {
    try {
      const response = await ApiService.getEmployees(state.token);
      console.log(JSON.stringify(response));
      commit('SET_EMPLOYEES', response.data);
    } catch (error) {
      console.error(`Error in fetching list of employees`, error);
    }
  },

  async fetchEmployeeById({ commit, state  }, id) {
    try {
      const response = await ApiService.getEmployeeById(id, state.token);
      console.log(JSON.stringify(response));
      commit('SET_SELECTED_EMPLOYEE', response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching employee with ID ${id}:`, error);
      throw error; 
    }
  },

  async addNewEmployee({ dispatch, state  }, employeeData) {
    try {
      await ApiService.addEmployee(employeeData, state.token);
      dispatch('fetchEmployees'); // Refresh employee list after adding
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  },

  async updateExistingEmployee({ dispatch, state  }, employeeData) {
    try {
      console.log("======================")
      //console.log(JSON.stringify(id));
      console.log(JSON.stringify(employeeData));
      console.log("==================")
      await ApiService.updateEmployee(employeeData.id, employeeData, state.token);
      dispatch('fetchEmployees'); // Refresh employee list after updating
    } catch (error) {
      console.error(`Error updating employee with ID ${employeeData.id}:`, error);
    }
  },

  async removeEmployee({ dispatch, state  }, id) {
    try {
      await ApiService.deleteEmployee(id, state.token);
      dispatch('fetchEmployees'); // Refresh employee list after deletion
    } catch (error) {
      console.error(`Error deleting employee with ID ${id}:`, error);
    }
  },
};

export default actions;
