import { createApp, h } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Home2 from './components/Home2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path:'/xxx', component: Home2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
