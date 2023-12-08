import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import LoginPage from '@/components/LoginPage.vue'
import TheDashboard from '@/components/TheDashboard.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import ResetPassword from '@/components/ResetPassword.vue'
import ChangeNewPass from '@/components/ChangeNewPass.vue'
import ErrorPage from '@/components/ErrorPage.vue'
Vue.use(VueRouter)

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
  {
    path: '/reset-password',
    component: MainLayout,
    children: [
      { path: '', component: ResetPassword },
      { path: 'new', component: ChangeNewPass },
    ],
  },
  {
    path: '*',
    component: ErrorPage,
  },
  {
    path: '/404',
    component: ErrorPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
