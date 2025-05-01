import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Dossier from './components/Dossier.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dossier', name: 'Dossier', component: Dossier }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
