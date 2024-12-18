import { createApp } from 'vue'
import './index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import VueAxios from "vue-axios"

createApp(App).use(router).use(VueAxios.axios).mount('#app')



