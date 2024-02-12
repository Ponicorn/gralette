import { createRouter, createWebHistory } from 'vue-router';
import Gralette from '../views/Gralette.vue';
import Edition from '../views/Edition.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Gralette',
            component: Gralette,
        },
        {
            path: '/edit',
            name: 'Edit',
            component: Edition,
        },
    ],
});

export default router;
