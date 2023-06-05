import { createRouter, createWebHistory } from 'vue-router'
import AdminLogin from '../components/login/AdminLogin.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
// import DashBoard from '../components/DashBoard.vue'
import UserManagement from '../components/UserManagement.vue'
import LeaderBoard from '../components/LeaderBoard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AdminLogin },
        // { path: '/dashboard', component: DashBoard },
        { path: '/AdminDashboard', component: AdminDashboard },
        {
            path: '/usermanagement', component: UserManagement
        },
        {
            path: '/leaderboard', component: LeaderBoard
        },
        
    ]
})
export default router;