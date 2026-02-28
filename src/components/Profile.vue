<template>
  <div class="profile">
    <h2>User Profile</h2>

    <!-- View Mode -->
    <div v-if="!editMode">
      <p><strong>Name:</strong> {{ formData.name }}</p>
      <p><strong>Email:</strong> {{ formData.email }}</p>
      <p><strong>Role:</strong> {{ formData.role }}</p>
      <button @click="editMode = true">Edit Profile</button>
    </div>

    <!-- Edit Mode -->
    <div v-else>
      <form @submit.prevent="saveProfile">
        <div class="form-group">
          <label>Name:</label>
          <input v-model="formData.name" type="text" required />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input v-model="formData.email" type="email" required />
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input v-model="formData.password" type="password" placeholder="Leave blank if unchanged" />
        </div>

        <div class="form-actions">
          <button type="submit">Save</button>
          <button type="button" @click="cancelEdit">Cancel</button>
        </div>
      </form>
    </div>

    <!-- Close Button -->
    <!-- <div class="close-btn-wrapper">
      <button @click="$emit('close')">Closes</button>
    </div> -->
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
      this.editMode = false;
      alert("Profile saved (front-end only)");
    }
  }
};
</script>

<style scoped>
.profile {
  padding: 20px;
  max-width: 400px;
  margin: auto;
  text-align: center; /* Center all content horizontally */
}

.form-group {
  margin: 10px 0;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.form-actions {
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  gap: 10px;
  margin-top: 15px;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  background-color: #4442b9;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #4442b9;
}

.close-btn-wrapper {
  margin-top: 20px;
  text-align: center; /* Center the close button */
}

.close-btn-wrapper button {
  width: 100px;
  background-color: #4442b9;
}

.close-btn-wrapper button:hover {
  background-color: #4442b9;
}
</style>
