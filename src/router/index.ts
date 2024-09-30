import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path:'/home',
            component: HomePage,
        },
        {
            path:'/',
            redirect: '/home'
        },
    ]
});
export default router;