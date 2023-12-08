import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import AppModal from './components/AppModal.vue'
import router from './router/router.js'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  productionTip: false,

  router,
  store,
  components: {
    AppModal,
  },
  render: (h) => h(App),
}).$mount('#app')
