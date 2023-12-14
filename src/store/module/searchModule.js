const state = {
  searchValue: '',
}

const mutations = {
  SET_SEARCH_VALUE(state, keyword) {
    state.searchValue = keyword.toLowerCase()
  },
}

const actions = {
  setKeyWord({ commit }, keyword) {
    commit('SET_SEARCH_VALUE', keyword)
  },
}
const getters = {
  searchValue: (state) => state.searchValue,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
