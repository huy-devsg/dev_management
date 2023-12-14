const state = {
  isModalOpen: false,
}

const mutations = {
  OPEN_MODAL(state) {
    state.isModalOpen = !state.isModalOpen
  },
}

const actions = {
  openModal({ commit }) {
    commit('OPEN_MODAL')
  },
}

const getters = {
  getModalOpen: (state) => state.isModalOpen,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
