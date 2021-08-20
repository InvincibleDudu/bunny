import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import {i18n} from '@/locale/locale'


const app = createApp(App)

installElementPlus(app)

app.use(store)
   .use(router)
   .use(i18n)
   .mount('#app')
