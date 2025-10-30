<template>
  <BaseLayout>
    <div class="dashboard-container">
      <h2>Welcome to Admin Dashboard!</h2>
      <p>Here’s a quick overview of your system.</p>

      <!-- Summary Cards -->
      <div class="cards">
        <div class="card">
          <i class="fas fa-calendar-check fa-2x"></i>
          <h3>Total Reservations</h3>
          <p>{{ stats.reservations }}</p>
        </div>
        <div class="card">
          <i class="fas fa-boxes fa-2x"></i>
          <h3>Inventory Items</h3>
          <p>{{ stats.inventory }}</p>
        </div>
        <div class="card">
          <i class="fas fa-coins fa-2x"></i>
          <h3>Transactions</h3>
          <p>{{ stats.transactions }}</p>
        </div>
        <div class="card">
          <i class="fas fa-hourglass-half fa-2x"></i>
          <h3>Pending Requests</h3>
          <p>{{ stats.pending }}</p>
        </div>
      </div>

      <!-- Recent Activity Table -->
      <div class="recent">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="txn in recentTransactions" :key="txn.id">
              <td>{{ txn.id }}</td>
              <td>{{ txn.customer }}</td>
              <td>{{ txn.amount }}</td>
              <td>{{ txn.status }}</td>
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
  name: "Dashboard",
  components: { BaseLayout },
  data() {
    return {
      stats: {
        reservations: 12,
        inventory: 48,
        transactions: 30,
        pending: 5,
      },
      recentTransactions: [
        { id: 101, customer: "John Doe", amount: "₱2,000", status: "Paid" },
        { id: 102, customer: "Jane Smith", amount: "₱1,500", status: "Pending" },
        { id: 103, customer: "Michael Lee", amount: "₱3,200", status: "Cancelled" },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.card {
  background: #4442b9;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.card i {
  margin-bottom: 5px;
}

.recent table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.recent th,
.recent td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.recent th {
  background: #f4f4f4;
}
</style>
