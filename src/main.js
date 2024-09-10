import './assets/main.css'
import InlineSvg from 'vue-inline-svg'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(InlineSvg)

app.mount('#app')
