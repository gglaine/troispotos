import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Dossier from './components/Dossier.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dossier', name: 'Dossier', component: Dossier },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
