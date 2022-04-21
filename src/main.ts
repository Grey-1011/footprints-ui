import { createApp, h } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './router' // 把router 封装成单独的 ts


const app = createApp(App)
app.use(router)
app.mount('#app')
