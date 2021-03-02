import { createRouter, createWebHistory } from 'vue-router'
import Simple from '../pages/Simple.vue'
import Reactive from '../pages/Reactive.vue'
import Home from '../pages/Home.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/simple',
      component: Simple
    },
    {
      path: '/reactive',
      component: Reactive
    }
  ]
})
export default router
