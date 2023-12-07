import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import LoginPage from '@/components/LoginPage.vue'
import TheDashboard from '@/components/TheDashboard.vue'
import RegisterPage from '@/components/RegisterPage.vue'
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: TheDashboard }],
  },
  {
    path: '/login',
    component: MainLayout,
    children: [{ path: '', component: LoginPage }],
  },
  {
    path: '/register',
    component: MainLayout,
    children: [{ path: '', component: RegisterPage }],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
