<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      const credentials = {
        username: this.username,
        password: this.password
      };

      // Call Vuex action to handle login
      this.$store.dispatch('login', credentials)
        .then(() => {
          // Redirect to employee list or perform necessary actions upon successful login
          // For example:
          this.$router.push('/employee-list');
        })
        .catch((error) => {
          console.error('Login failed:', error);
          // Handle login error (display error message, etc.)
        });
    }
  }
};
</script>

