import { createRouter, createWebHistory } from 'vue-router'
import LoginGamer from '../components/LoginGamer.vue'
import AccessGranted from '../components/AccessGranted.vue'

const routes = [
  { path: '/', component: LoginGamer },
  { path: '/access-granted', component: AccessGranted }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router