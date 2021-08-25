import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile.vue';
import Interests from '@/views/Interests.vue';
import YourGoal from '@/views/YourGoal.vue';
import Map from '@/views/Map.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/interests',
        name: 'Interests',
        component: Interests,
    },
    {
        path: '/your-goal',
        name: 'YourGoal',
        component: YourGoal,
    },
    {
        path: '/map',
        name: 'Map',
        component: Map,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
