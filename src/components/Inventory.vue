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
  <!-- Modal Section -->
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h3>Edit Item</h3>
      <form @submit.prevent="saveItem" v-if="selectedItem">
        <input v-model="selectedItem.name" placeholder="Item Name" />
        <input v-model.number="selectedItem.quantity" type="number" placeholder="Quantity" />
        <input v-model.number="selectedItem.price" type="number" placeholder="Price" />
        <button type="submit">Save</button>
        <button type="button" @click="closeModal">Cancel</button>
      </form>
    </div>
  </div>
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
      showModal: false,
      selectedItem: null,
    };
  },
  
  methods: {
    editItem(item) {
      this.selectedItem = { ...item };
      this.showModal = true;
    },
    deleteItem(item) {
      alert(`Delete feature coming soon for ${item.name}`);
    },
    closeModal() {
      this.showModal = false;
      this.selectedItem = null;
    },
    saveItem() {
      const index = this.inventoryItems.findIndex(item => item.id === this.selectedItem.id);
      if (index !== -1) {
        this.inventoryItems.splice(index, 1, this.selectedItem);
      }
      this.closeModal();
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
  background-color: #4442b9;
  color: white;
}
.inventory-table button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #4442b9;
  color: white;
  border: none;
  border-radius: 4px;
}
.inventory-table button:hover {
  background-color: #282829;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 6px;
  min-width: 300px;
  color: #333;
}

.modal form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
