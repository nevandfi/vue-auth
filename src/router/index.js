import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'login',
        path: '/',
        component: () => import('/src/pages/index.vue'),
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('/src/pages/dashboard.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;