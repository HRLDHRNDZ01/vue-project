<template>
  <BaseLayout>
    <div class="reservation-container">
      <h2>Reservation Module</h2>
      <p>Manage your reservations here.</p>

      <!-- Add Reservation Form -->
      <div class="form-section">
        <h3>Add New Reservation</h3>
        <form @submit.prevent="addReservation">
          <input v-model="newReservation.name" type="text" placeholder="Customer Name" required />
          <input v-model="newReservation.date" type="date" required />
          <input v-model="newReservation.time" type="time" required />
          <input v-model="newReservation.guests" type="number" placeholder="Guests" required />
          <button type="submit">Add Reservation</button>
        </form>
      </div>

      <!-- Reservation List -->
      <div class="list-section">
        <h3>Current Reservations</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(res, index) in reservations" :key="res.id">
              <td>{{ res.id }}</td>
              <td>{{ res.name }}</td>
              <td>{{ res.date }}</td>
              <td>{{ res.time }}</td>
              <td>{{ res.guests }}</td>
              <td>
                <button @click="editReservation(index)">Edit</button>
                <button @click="deleteReservation(index)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "Reservation",
  components: { BaseLayout },
  data() {
    return {
      newReservation: {
        name: "",
        date: "",
        time: "",
        guests: null,
      },
      reservations: [
        { id: 1, name: "John Doe", date: "2025-09-10", time: "18:00", guests: 4 },
        { id: 2, name: "Jane Smith", date: "2025-09-12", time: "19:30", guests: 2 },
      ],
    };
  },
  methods: {
    addReservation() {
      const newId = this.reservations.length + 1;
      this.reservations.push({ id: newId, ...this.newReservation });
      this.newReservation = { name: "", date: "", time: "", guests: null }; // reset form
    },
    deleteReservation(index) {
      this.reservations.splice(index, 1);
    },
    editReservation(index) {
      alert("Edit feature can be implemented here.");
    },
  },
};
</script>

<style scoped>
.reservation-container {
  padding: 20px;
}

.form-section,
.list-section {
  margin: 20px 0;
}

form {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

form input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

form button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
}

form button:hover {
  background: #36976b;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
}

table th {
  background: #f4f4f4;
}
</style>
