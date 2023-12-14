export default {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    ADD_EMPLOYEE(state, newEmployee) {
        state.employees.push(newEmployee);
    },
    REMOVE_EMPLOYEE(state, employeeId) {
        state.employees = state.employees.filter(employee => employee.id !== employeeId);
    },
    UPDATE_EMPLOYEE(state, updatedEmployee) {
        const index = state.employees.findIndex(employee => employee.id === updatedEmployee.id);
        if (index !== -1) {
            state.employees.splice(index, 1, updatedEmployee);
        }
    },
    SET_EMPLOYEES(state, employees) {
        state.employees = employees;
    },
    SET_SELECTED_EMPLOYEE(state, employee) {
        state.selected_employee = employee;
    },
  };