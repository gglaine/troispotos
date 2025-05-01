import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'           // ✅ on importe le routeur
import './style.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)                         // ✅ on utilise le routeur
app.mount('#app')
