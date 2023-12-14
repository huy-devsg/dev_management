import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './module/userModule.js'
import modalModule from './module/modalModule.js'
import searchModule from './module/searchModule.js'
import authModule from './module/authModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userModule,
    modal: modalModule,
    search: searchModule,
    auth: authModule,
  },
})
