<template>
  <div class="login-container">
    <h2>Login Portal</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label>Username:</label>
        <input type="text" v-model="username" required />
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>

      <button type="submit">Login</button>
    </form>

    <p v-if="message">{{ message }}</p>

    <p>Don't have an account? 
      <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const message = ref('');

    const handleLogin = () => {
      // Simple validation
      if (username.value === 'admin@example.com' && password.value === '1234') {
        message.value = 'Login successful!';
        setTimeout(() => {
          message.value = '';
          // Redirect to dashboard or another page
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        message.value = 'Invalid credentials';
      }
    };

    return { username, password, message, handleLogin };
  },
};
</script>

<style>
.login-container {
  width: 450px;      /* slightly wider */
  padding: 30px;     /* more padding */
  text-align: center;
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
  padding: 10px 20px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}
</style>
