import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// ✅ Import global styles
import './assets/main.css'

// ✅ Import Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";
createApp(App).use(router).mount('#app');
