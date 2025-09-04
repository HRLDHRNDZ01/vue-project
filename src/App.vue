<template>
  <div id="app">
    <router-view></router-view> <!-- renders Login or Signup -->
  </div>
</template>

<script setup>
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
