import { createRouter, createWebHistory } from 'vue-router'
import AdminLogin from '../components/login/AdminLogin.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import UserManagement from '../components/UserManagement.vue'
import LeaderBoard from '../components/LeaderBoard.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/adminlogin', component: AdminLogin },
        { path: '/admindashboard', component: AdminDashboard },
        {
            path: '/usermanagement', component: UserManagement
        },
        {
            path: '/leaderboard', component: LeaderBoard
        },
    ]
})
export default router;