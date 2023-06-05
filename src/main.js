import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes.js'
import store from './store/index.js'
import cors from 'cors'

const app = createApp(App)
app.use(router);
app.use(store);
app.use(cors);



app.mount('#app')
