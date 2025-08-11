import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PipCalc from '../views/PipCalc.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pip-calc',
    name: 'PipCalc',
    component: PipCalc
  },
  {
    path: '/position-calc',
    name: 'PositionCalc',
    component: () => import('../views/PositionCalc.vue') // Lazy load for future component
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
