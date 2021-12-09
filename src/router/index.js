import { createRouter, createWebHistory } from 'vue-router';
import Discover from '@/views/Discover.vue';
import Transfer from '@/views/Transfer.vue';

const routes = [
  {
    path: '/',
    name: 'Discover',
    component: Discover,
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
