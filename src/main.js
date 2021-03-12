import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import installElementPlus from './plugins/element'
import axios from "axios";


const app = createApp(App)
app.config.globalProperties.$http = axios.create({
    baseURL: 'http://localhost:3001/api'
})
installElementPlus(app)
app.use(router).mount('#app');
