import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
// Import Tailwind CSS
import './assets/tailwind.css';

const app = createApp(App);
app.config.productionTip = false; // Disable the production tip
app.config.devtools = false;      // Disable Vue devtools
app.mount('#app');