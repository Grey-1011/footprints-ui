import './lib/no-name.scss'
import './index.scss'
import { createApp, h } from 'vue'
import App from './App.vue'
import { router } from './router' // 把router 封装成单独的 ts
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown",Markdown)
