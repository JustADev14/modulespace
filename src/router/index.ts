import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QRCardUploadView from '../views/QRCardUploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/qr-upload',
      name: 'qr-upload',
      component: QRCardUploadView
    }
  ]
})

export default router 