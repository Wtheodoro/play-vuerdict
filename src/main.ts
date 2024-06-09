import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './assets/style.css'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiSuitHeartFill, MdLocalfiredepartment, BiStarFill } from 'oh-vue-icons/icons'

addIcons(BiSuitHeartFill, MdLocalfiredepartment, BiStarFill)

const app = createApp(App)
app.use(createPinia())
app.use(Toast)
app.use(router)

app.component('v-icon', OhVueIcon)

app.mount('#app')
