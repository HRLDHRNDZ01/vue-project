<template>
  <div id="app">
    <Login />
  </div>
</template>

<script setup>
import Login from './components/login.vue';
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#app {
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;     /* center vertically */
  height: 100vh;           /* full viewport height */
  background-color: #f5f5f5;
}
</style>
