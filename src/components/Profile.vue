<template>
  <div class="profile">
    <h2>User Profile</h2>
    <p><strong>Name:</strong> {{ profile.name }}</p>
    <p><strong>Email:</strong> {{ profile.email }}</p>
    <p><strong>Role:</strong> {{ profile.role }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: {}
    };
  },
  async created() {
    try {
      const res = await fetch("http://localhost:3000/api/profile"); 
      this.profile = await res.json();
    } catch (err) {
      console.error("Failed to load profile", err);
    }
  }
};
</script>
