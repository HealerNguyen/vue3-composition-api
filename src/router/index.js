import { createRouter, createWebHistory } from 'vue-router'
import Simple from '../pages/Simple.vue'
import Reactive from '../pages/Reactive.vue'
import Home from '../pages/Home.vue'
import Modular from '../pages/Modular.vue'
import LifeCycle from '../pages/LifeCycle.vue'
import Example from '../pages/Example.vue'


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
    },
    {
      path: '/modular',
      component: Modular
    },
    {
      path: '/lifecycle',
      component: LifeCycle
    },
    {
      path: '/example',
      component: Example
    }
  ]
})
export default router
