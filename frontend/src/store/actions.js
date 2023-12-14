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
      commit('SET_EMPLOYEES', response.data);
    } catch (error) {
      console.error(`Error in fetching list of employees`, error);
    }
  },

  async fetchEmployeeById({ commit, state  }, id) {
    try {
      const response = await ApiService.getEmployeeById(id, state.token);
        commit('SET_SELECTED_EMPLOYEE', response.data);
    } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
  }
  },

  async addNewEmployee({ dispatch, state  }, employeeData) {
    try {
      await ApiService.addEmployee(employeeData, state.token);
      dispatch('fetchAllEmployees'); // Refresh employee list after adding
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  },

  async updateExistingEmployee({ dispatch, state  }, { id, employeeData }) {
    try {
      await ApiService.updateEmployee(id, employeeData, state.token);
      dispatch('fetchAllEmployees'); // Refresh employee list after updating
    } catch (error) {
      console.error(`Error updating employee with ID ${id}:`, error);
    }
  },

  async removeEmployee({ dispatch, state  }, id) {
    try {
      await ApiService.deleteEmployee(id, state.token);
      dispatch('fetchAllEmployees'); // Refresh employee list after deletion
    } catch (error) {
      console.error(`Error deleting employee with ID ${id}:`, error);
    }
  },
};

export default actions;
