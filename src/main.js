import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'

// import 'animate.css';
import './assets/styles/main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
