<template>
  <BaseLayout>
    <div class="reservation-container">
      <h2>Reservation Module</h2>
      <p>Manage your reservations here.</p>

      <!-- Add Reservation Form -->
      <div class="form-section">
        <h3>Add New Reservation</h3>
        <form @submit.prevent="addReservation">
          <input
            class="form-input"
            v-model="newReservation.name"
            type="text"
            placeholder="Customer Name"
            required
          />
          <input
            class="form-input"
            v-model="newReservation.date"
            type="date"
            required
          />

          <!-- Hours Selector -->
          <select
            class="form-input"
            v-model="newReservation.hours"
            @change="resetDays"
          >
            <option disabled value="">Select Number of Hours</option>
            <option v-for="h in [3, 6, 9, 12]" :key="h" :value="h">
              {{ h }} hours
            </option>
            <option value="other">Other (use Days)</option>
          </select>

          <!-- Days Input (only show if 'Other' is selected) -->
          <input
            class="form-input"
            v-if="newReservation.hours === 'other'"
            v-model="newReservation.days"
            type="number"
            placeholder="Number of Days"
            min="1"
            required
          />

          <!-- Room Type Selector -->
          <select
            class="form-input"
            v-model="newReservation.roomType"
            @change="resetRoom"
          >
            <option disabled value="">Select Room Type</option>
            <option
              v-for="(rooms, type) in roomOptions"
              :key="type"
              :value="type"
            >
              {{ type }}
            </option>
          </select>

          <!-- Specific Room Selector -->
          <select
            class="form-input"
            v-if="newReservation.roomType"
            v-model="newReservation.roomId"
          >
            <option disabled value="">Select Specific Room</option>
            <option
              v-for="room in roomOptions[newReservation.roomType]"
              :key="room.id"
              :value="room.id"
            >
              Room {{ room.number }} - Floor {{ room.floor }} (₱{{ room.price }})
            </option>
          </select>

          <!-- Show Price -->
          <p v-if="selectedRoom">
            Price: <strong>₱{{ selectedRoom.price }}</strong>
          </p>

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
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(res, index) in reservations" :key="res.id">
              <td>{{ res.id }}</td>
              <td>{{ res.name }}</td>
              <td>{{ res.date }}</td>
              <td>
                <span v-if="res.hours !== 'other'">{{ res.hours }} hours</span>
                <span v-else>{{ res.days }} days</span>
              </td>
              <td>
                <button @click="editReservation(index)">Edit</button>
                <button @click="deleteReservation(index)">Delete</button>
              </td>
            </tr>
            <tr v-if="reservations.length === 0">
              <td colspan="5">No reservations yet.</td>
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
        hours: "",
        days: null,
        roomType: "",
        roomId: "",
      },
      reservations: [],
      roomOptions: {
        Deluxe: [
          { id: 1, number: 101, floor: 1, price: 1000 },
          { id: 2, number: 102, floor: 1, price: 1000 },
        ],
        Standard: [
          { id: 3, number: 201, floor: 2, price: 800 },
          { id: 4, number: 202, floor: 2, price: 800 },
        ],
      },
    };
  },
  computed: {
    selectedRoom() {
      if (!this.newReservation.roomType || !this.newReservation.roomId) return null;
      return this.roomOptions[this.newReservation.roomType].find(
        (room) => room.id === this.newReservation.roomId
      );
    },
  },
  created() {
    this.fetchReservations();
  },
  methods: {
    fetchReservations() {
      const saved = localStorage.getItem("reservations");
      this.reservations = saved ? JSON.parse(saved) : [];
    },
    saveReservations() {
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    },
    resetDays() {
      if (this.newReservation.hours !== "other") {
        this.newReservation.days = null;
      }
    },
    resetRoom() {
      this.newReservation.roomId = "";
    },
    addReservation() {
      const newId = this.reservations.length
        ? Math.max(...this.reservations.map((r) => r.id)) + 1
        : 1;
      const newRes = { id: newId, ...this.newReservation };
      this.reservations.push(newRes);
      this.saveReservations();
      this.newReservation = {
        name: "",
        date: "",
        hours: "",
        days: null,
        roomType: "",
        roomId: "",
      };
    },
    deleteReservation(index) {
      this.reservations.splice(index, 1);
      this.saveReservations();
    },
    editReservation(index) {
      alert("Edit feature not yet implemented.");
    },
  },
};
</script>

<style scoped>
.reservation-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.form-section,
.list-section {
  margin: 20px 0;
}

.form-input {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  box-sizing: border-box;
}

form input,
form select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

form button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
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
  text-align: left;
}

table th {
  background: #f4f4f4;
}

button {
  padding: 6px 12px;
  margin-right: 4px;
  border: none;
  background-color: #f56c6c;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d9534f;
}
</style>
