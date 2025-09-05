<template>
  <div class="profile">
    <h2>User Profile</h2>
    <p><strong>Name:</strong> {{ formData.name }}</p>
    <p><strong>Email:</strong> {{ formData.email }}</p>
    <p><strong>Role:</strong> {{ formData.role }}</p>
    <button @click="editMode = true" v-if="!editMode">Edit Profile</button>

    <div v-if="editMode">
      <form @submit.prevent="saveProfile">
        <label>Name: <input v-model="formData.name" /></label>
        <label>Email: <input v-model="formData.email" /></label>
        <label>Password: <input v-model="formData.password" type="password" placeholder="New password" /></label>
        <button type="submit">Save</button>
        <button type="button" @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      editMode: false,
      formData: {
        name: "John Doe",
        email: "admin@example.com",
        role: "Admin",
        password: ""
      }
    };
  },
  methods: {
    cancelEdit() {
      this.editMode = false;
      this.formData.password = "";
    },
    saveProfile() {
      // Front-end only: just close edit mode
      this.editMode = false;
      alert("Profile saved (front-end only)");
    }
  }
};
</script>

<style scoped>
.profile { padding: 10px; }
label { display: block; margin: 5px 0; }
input { width: 100%; padding: 5px; margin-top: 2px; }
button { margin: 5px 5px 0 0; }
</style>
