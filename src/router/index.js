import { createRouter, createWebHistory } from 'vue-router'
import Gralette from '../views/Gralette.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Gralette',
            component: Gralette
        }
    ]
})

export default router