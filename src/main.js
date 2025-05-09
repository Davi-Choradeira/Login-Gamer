import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 🔥 Importa o Vue Router

const app = createApp(App)
app.use(router) // 🚀 Ativa o Vue Router na aplicação
app.mount('#app')