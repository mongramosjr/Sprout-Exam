import ApiService from '../services/ApiService';

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await ApiService.login(credentials);
      commit('SET_TOKEN', response.data.token);
      // Handle token storage (e.g., in local storage)
    } catch (error) {
      // Handle login error
    }
  },

  async fetchEmployees({ commit, state }) {
    try {
      const response = await ApiService.getEmployees(state.token);
      commit('SET_EMPLOYEES', response.data);
    } catch (error) {
      // Handle fetch employees error
    }
  },

  // Other actions for CRUD operations (create, update, delete)
};

export default actions;
