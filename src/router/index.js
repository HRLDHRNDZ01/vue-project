import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Profile from "@/components/Profile.vue";
import Signup from '../components/Signup.vue';
import Dashboard from '../components/Dashboard.vue';
import Reservation from '../components/Reservation.vue';
import Inventory from '@/components/Inventory.vue'; // Import Inventory component
import Transactions from '@/components/Transactions.vue';
// import Profile from '@/components/Profile.vue'; // Import Profile component

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard },
  { path: '/reservation', component: Reservation },
  { path: '/inventory', component: Inventory },
  { path: '/transactions', component: Transactions},
  // {path: '/profile', component: Profile } // Add Profile route
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
