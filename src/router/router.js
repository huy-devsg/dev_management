import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import LoginPage from '@/components/LoginPage.vue'
import TheDashboard from '@/components/TheDashboard.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import ResetPassword from '@/components/ResetPassword.vue'
import ChangeNewPass from '@/components/ChangeNewPass.vue'
import ErrorPage from '@/components/ErrorPage.vue'
import { checkLogin } from '@/apis/auth'
import store from '../store/store.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
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
]

const router = new VueRouter({
  mode: 'history',
  routes,
})
router.beforeEach(async (to, from, next) => {
  const publicPages = [
    '/login',
    '/register',
    '/reset-password',
    '/reset-password/new',
  ]
  const isPublicPage = publicPages.includes(to.path)
  const isLoggedIn = await checkLogin()
  console.log('isLoggedIn: ', isLoggedIn)
  if (isLoggedIn) {
    await store.dispatch('setLogin', isLoggedIn)
  }
  if (isPublicPage && isLoggedIn) {
    next('/')
  } else if (!isPublicPage && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
