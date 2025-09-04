<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <aside :class="['sidebar', { collapsed: sidebarCollapsed }]">
      <button class="toggle-btn" @click="toggleSidebar">
        <i class="fas" :class="sidebarCollapsed ? 'fa-bars' : 'fa-times'"></i>
      </button>
      <ul>
        <li>
          <router-link to="/dashboard">
            <i class="fas fa-home"></i>
            <span v-if="!sidebarCollapsed">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/reservation">
            <i class="fas fa-calendar-alt"></i>
            <span v-if="!sidebarCollapsed">Reservation</span>
          </router-link>
        </li>
        <li>
          <router-link to="/inventory">
            <i class="fas fa-chart-bar"></i>
            <span v-if="!sidebarCollapsed">Inventory</span>
          </router-link>
        </li>
        <li>
          <router-link to="/module2">
            <i class="fas fa-cogs"></i>
            <span v-if="!sidebarCollapsed">Module 2</span>
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <header class="navbar">
        <h1 class="logo">My Dashboard</h1>
        <nav class="nav-right">
          <router-link to="/dashboard">Home</router-link>
          <div class="dropdown" @click="toggleDropdown">
            <span class="user-icon">👤</span>
            <div v-if="dropdownOpen" class="dropdown-menu" @click.stop>
              <button @click="openProfileModal">Profile</button>
              <button @click="logout">Logout</button>
            </div>
          </div>
        </nav>
      </header>

      <main class="content">
        <!-- THIS IS THE SLOT FOR MODULE CONTENT -->
        <slot></slot>
      </main>
    </div>

    <!-- Profile Modal -->
    <div v-if="profileModalOpen" class="modal-overlay" @click.self="closeProfileModal">
      <div class="modal">
        <h3>User Profile</h3>
        <p>Name: John Doe</p>
        <p>Email: admin@example.com</p>
        <button @click="closeProfileModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  data() {
    return {
      dropdownOpen: false,
      sidebarCollapsed: false,
      profileModalOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },
    openProfileModal() {
      this.profileModalOpen = true;
      this.dropdownOpen = false; // close dropdown
    },
    closeProfileModal() {
      this.profileModalOpen = false;
    },
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* --- same styles as before for sidebar, navbar, dropdown, modal --- */
.dashboard { display: flex; height: 100vh; width: 100vw; margin: 0; padding: 0; }
.sidebar { width: 200px; background: #2c3e50; color: white; display: flex; flex-direction: column; transition: width 0.3s; }
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; margin: 0; }
.sidebar li { padding: 15px; }
.sidebar a { color: white; text-decoration: none; display: flex; align-items: center; }
.sidebar a i { margin-right: 10px; }
.sidebar.collapsed a i { margin-right: 0; text-align: center; width: 100%; }
.toggle-btn { background: none; border: none; color: white; padding: 15px; cursor: pointer; font-size: 18px; display: flex; justify-content: center; align-items: center; }

.main-content { flex: 1; display: flex; flex-direction: column; }
.navbar { background-color: #42b983; color: white; display: flex; justify-content: space-between; padding: 20px; }
.nav-right { display: flex; align-items: center; }
.dropdown { position: relative; cursor: pointer; }
.dropdown-menu { position: absolute; top: 40px; right: 0; background: white; color: #333; border: 1px solid #ddd; border-radius: 6px; display: flex; flex-direction: column; padding: 5px 0; min-width: 150px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.dropdown-menu button { width: 100%; padding: 10px 15px; border: none; background: none; text-align: left; cursor: pointer; color: #333; font-size: 14px; }
.dropdown-menu button:hover { background-color: #f0f0f0; }

.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; }
.modal { background: white; padding: 20px; border-radius: 6px; min-width: 300px; }
.content { flex: 1; padding: 20px; }
</style>
