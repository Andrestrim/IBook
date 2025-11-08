import {useBookStore} from '@/store/BooksStore'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app.vue'

const pinia = createPinia()
const app = createApp(App)


app.use(pinia).mount('#app')

const bookStore = useBookStore()