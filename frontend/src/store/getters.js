export default {
    getToken: state => {
      return state.token;
    },
    getEmployees: state => {
        return state.employees;
    },
    getEmployeeById: state => id => {
        return state.employees.find(employee => employee.id === id);
    },
  };
  