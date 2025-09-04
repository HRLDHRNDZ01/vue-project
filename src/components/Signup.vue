<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Username:</label>
        <input v-model="username" type="text" placeholder="Username" required />
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input v-model="email" type="email" placeholder="Email" required />
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input v-model="password" type="password" placeholder="Password" required />
      </div>

      <div class="form-group">
        <label>Confirm Password:</label>
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
      </div>

      <button type="submit">Sign Up</button>
    </form>

    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg: ''
    };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        this.errorMsg = "Passwords do not match";
      } else {
        this.errorMsg = '';
        alert(`Account created for ${this.username}!`);
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
  width: 450px;
  text-align: center;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  padding: 10px 25px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}

.error {
  color: red;
}
</style>
