import {createRouter,createWebHashHistory} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
    history: createWebHashHistory(),
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