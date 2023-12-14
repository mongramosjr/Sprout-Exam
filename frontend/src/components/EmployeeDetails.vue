<template>
  <div>
    <h2>Employee Details</h2>
    <div v-if="employee">
      <p><strong>Name:</strong> {{ employee.name }}</p>
      <p><strong>Hire Date:</strong> {{ employee.hire_date }}</p>
    </div>
    <div v-else>
      <p>Loading employee details...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: null
    };
  },
  created() {
    // Fetch employee details when the component is created
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
          this.employee = { ...employee };
        })
        .catch((error) => {
          console.error('Failed to fetch employee details:', error);
          // Handle fetch employee details error (display error message, etc.)
        });
    }
  }
};
</script>