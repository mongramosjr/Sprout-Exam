<template>
  <div>
    <h2>Edit Employee</h2>
    <form @submit.prevent="updateEmployee">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editedEmployee.name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="editedEmployee.email" />
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
        email: ''
        // Other fields for the edited employee
      }
    };
  },
  created() {
    // Fetch the employee details when the component is created
    this.fetchEmployeeDetails();
  },
  methods: {
    fetchEmployeeDetails() {
      // Retrieve employee ID from route params or component props
      const employeeId = this.$route.params.id; // Assuming using Vue Router

      // Call Vuex action to fetch the employee details by ID
      this.$store.dispatch('fetchEmployeeById', employeeId)
        .then((employee) => {
          // Update local data with fetched employee details
          this.editedEmployee = { ...employee };
        })
        .catch((error) => {
          console.error('Failed to fetch employee details:', error);
          // Handle fetch employee details error (display error message, etc.)
        });
    },
    updateEmployee() {
      // Call Vuex action to update the employee
      this.$store.dispatch('updateEmployee', this.editedEmployee)
        .then(() => {
          // Redirect to employee list or perform necessary actions upon successful update
          // For example:
          this.$router.push('/employee-list');
        })
        .catch((error) => {
          console.error('Failed to update employee:', error);
          // Handle update employee error (display error message, etc.)
        });
    }
  }
};
</script>
