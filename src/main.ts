import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/base.tailwind.css'
import './assets/main.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/es/components/loading/style/index'
// import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
