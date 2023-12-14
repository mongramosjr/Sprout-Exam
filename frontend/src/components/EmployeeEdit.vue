<template>
  <div>
    <h2>Edit Employee</h2>
    <form @submit.prevent="updateEmployee">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editedEmployee.name" />
      </div>
      <div>
        <label for="hire_date">Hire Date:</label>
        <input type="date" id="hire_date" v-model="editedEmployee.hire_date" />
      </div>
      <!-- Other input fields for editing employee details -->
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedEmployee: {
        id: null,
        name: '',
        hire_date: ''
      }
    };
  },
  created() {
    // Fetch the employee details when the component is created
    this.fetchEmployeeDetails();
  },
  methods: {
    fetchEmployeeDetails() {
      const employeeId = this.$route.params.id; 

      // Call Vuex action to fetch the employee details by ID
      this.$store.dispatch('fetchEmployeeById', employeeId)
        .then((employee) => {
          // Update local data with fetched employee details
          this.editedEmployee = employee;
        })
        .catch((error) => {
          console.error('Failed to fetch employee details:', error);
        });
    },
    updateEmployee() {
      // Call Vuex action to update the employee
      const employeeId = this.$route.params.id; 
      this.editedEmployee.id = employeeId;
      console.log("___MONG____");
      console.log(JSON.stringify(employeeId));
      console.log(JSON.stringify(this.editedEmployee));
      console.log("___MONG____");
      this.$store.dispatch('updateExistingEmployee', this.editedEmployee)
        .then(() => {
          this.$router.push('/employee-list');
        })
        .catch((error) => {
          console.error('Failed to update employee:', error);
        });
    }
  }
};
</script>
