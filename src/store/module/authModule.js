const state = {
  isLogin: false,
}

const mutations = {
  SET_LOGIN(state, payload) {
    state.isLogin = payload
  },
}

const actions = {
  setLogin({ commit }, payload) {
    commit('SET_LOGIN', payload)
  },
}

const getters = {
  getIsLogin: (state) => state.isLogin,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
