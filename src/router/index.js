import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../pages/main-page/MainPage.vue'
import AboutPage from '../pages/about-page/AboutPage.vue'
import ContactsPage from '../pages/contacts-page/ContactsPage.vue'
import HowToUse from '../pages/how-to-use/HowToUse.vue'
import TermsOfUse from '../pages/terms-of-use/TermsOfUse.vue'
import PrintTermsOfUse from '../pages/terms-of-use/PrintTermsOfUse.vue'

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
    path: '/contact',
    name: 'Contacts',
    component: ContactsPage
  },
  {
    path: '/how-to-use',
    name: 'How to use',
    component: HowToUse
  },
  {
    path: '/terms-of-use',
    name: 'Terms of use',
    component: TermsOfUse
  },
  {
    path: '/terms-of-use-print',
    name: 'Print terms of use',
    component: PrintTermsOfUse
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
