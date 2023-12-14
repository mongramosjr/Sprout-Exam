<template>
  <div>
    <h2>Create Employee</h2>
    <form @submit.prevent="createEmployee">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newEmployee.name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="newEmployee.email" />
      </div>
      <!-- Other input fields for employee details -->
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newEmployee: {
        name: '',
        email: ''
        // Other fields for the new employee
      }
    };
  },
  methods: {
    createEmployee() {
      // Call Vuex action to create an employee
      this.$store.dispatch('createEmployee', this.newEmployee)
        .then(() => {
          // Redirect to employee list or perform necessary actions upon successful creation
          // For example:
          this.$router.push('/employee-list');
        })
        .catch((error) => {
          console.error('Failed to create employee:', error);
          // Handle create employee error (display error message, etc.)
        });
    }
  }
};
</script>