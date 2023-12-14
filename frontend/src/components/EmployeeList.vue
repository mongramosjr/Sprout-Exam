<template>
  <div>
    <h2>Employee List</h2>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        
        <router-link :to="'/employee-details/' + employee.id">
          {{ employee.name }} - {{ employee.hire_date }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: []
    };
  },
  created() {
    // Fetch employees when the component is created
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      // Call Vuex action to fetch employees
      this.$store.dispatch('fetchEmployees')
        .then(() => {
          // Update local data with fetched employees from Vuex store
          this.employees = this.$store.getters.getEmployees;
        })
        .catch((error) => {
          console.error('Failed to fetch employees:', error);
        });
    }
  }
};
</script>