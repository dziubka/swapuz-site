import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../pages/main-page/MainPage.vue'
import AboutPage from '../pages/about-page/AboutPage.vue'
import ContactsPage from '../pages/contacts-page/ContactsPage.vue'
import HowToUse from '../pages/how-to-use/HowToUse.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage
  },
  {
    path: '/how-to-use',
    name: 'How to use',
    component: HowToUse
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
