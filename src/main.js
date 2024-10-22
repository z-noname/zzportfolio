import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
// Import Tailwind CSS
import './assets/tailwind.css';

const app = createApp(App);

app.mount('#app');
//createApp(App).use(router).mount('#app');