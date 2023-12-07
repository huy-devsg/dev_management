import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'
import AppModal from './components/AppModal.vue'
import router from './router/router.js'

const app = createApp(App)
app.use(store)
app.component('app-modal', AppModal)
app.use(router)
app.mount('#app')
