import { createApp } from 'vue';
import '../src/assets/css/index.css';
import App from './App.vue';
import { Icon } from '@iconify/vue';

import Dashboard from '@/pages/DashboardView.vue';
import Overview from '@/pages/OverviewView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/overview', component: Overview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');

// createApp(App).component("Icon", Icon).mount("#app");
