import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/style.css'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiSuitHeartFill } from 'oh-vue-icons/icons'

addIcons(BiSuitHeartFill)

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.component('v-icon', OhVueIcon)

app.mount('#app')
