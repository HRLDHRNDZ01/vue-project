<template>
  <BaseLayout>
    <h2>Transactions Module</h2>
    <p>Here you can manage all payments and billing records.</p>

    <!-- Example transaction table -->
    <table class="transactions-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(txn, index) in transactions" :key="index">
          <td>{{ txn.id }}</td>
          <td>{{ txn.customer }}</td>
          <td>{{ txn.amount }}</td>
          <td>{{ txn.status }}</td>
          <td>{{ txn.date }}</td>
        </tr>
      </tbody>
    </table>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "Transactions",
  components: { BaseLayout },
  data() {
    return {
      transactions: [
        { id: 1, customer: "John Doe", amount: "₱2,000", status: "Paid", date: "2025-09-05" },
        { id: 2, customer: "Jane Smith", amount: "₱1,500", status: "Pending", date: "2025-09-04" },
        { id: 3, customer: "Michael Lee", amount: "₱3,200", status: "Cancelled", date: "2025-09-03" },
      ],
    };
  },
};
</script>

<style scoped>
.transactions-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.transactions-table th,
.transactions-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
.transactions-table th {
  background-color: #f4f4f4;
}
</style>
