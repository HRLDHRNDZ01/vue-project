<template>
  <BaseLayout>
    <h2>Inventory Module</h2>
    <p>Here is where you can manage your inventory items or services.</p>

    <!-- Example table for items -->
    <table class="inventory-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inventoryItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price | currency }}</td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "Inventory",
  components: { BaseLayout },
  data() {
    return {
      inventoryItems: [
        { id: 1, name: "Room A", quantity: 10, price: 100 },
        { id: 2, name: "Room B", quantity: 5, price: 150 },
        { id: 3, name: "Service X", quantity: 20, price: 50 },
      ],
    };
  },
  methods: {
    editItem(item) {
      alert(`Edit feature coming soon for ${item.name}`);
    },
    deleteItem(item) {
      alert(`Delete feature coming soon for ${item.name}`);
    },
  },
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
.inventory-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.inventory-table th,
.inventory-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
.inventory-table th {
  background-color: #42b983;
  color: white;
}
.inventory-table button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
