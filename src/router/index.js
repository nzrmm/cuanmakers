import { createRouter, createWebHistory } from 'vue-router';
import Discover from '@/views/Discover.vue';
import Maintenance from '@/views/Maintenance.vue';
import NotFound from '@/views/404.vue';

const routes = [
  {
    path: '/',
    name: 'Discover',
    component: Discover,
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
