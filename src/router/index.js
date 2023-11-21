import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../pages/main-page/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
