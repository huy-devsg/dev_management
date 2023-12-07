import { registerUserApi } from '@/apis/auth'
import {
  createUserApi,
  getAllUserApi,
  getUserById,
  removeUserApi,
  updateUserApi,
} from '@/apis/users'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    userList: [],
    isModalOpen: false,
    userEdit: undefined,
    searchValue: '',
    isLogin: false,
    user: '',
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.isLogin = payload
    },
    SET_USER(state, payload) {
      state.userList = payload
    },
    SET_USER_ID(state, payload) {
      state.user = payload
      console.log('state.user: ', state.user)
    },
    ADD_USER(state, payload) {
      if (payload.data) {
        state.userList = [...state.userList, payload.data]
      }
    },
    UPDATE_USER(state, payload) {
      state.userList = [...state.userList, payload]
    },
    REMOVE_USER(state, userId) {
      state.userList = state.userList.filter((user) => user.user_id !== userId)
    },
    OPEN_MODAL(state) {
      state.isModalOpen = !state.isModalOpen
    },

    SET_USER_EDIT(state, userId) {
      state.userEdit = state.userList.find((user) => user.user_id === userId)
    },
    SET_SEARCH_VALUE(state, keyword) {
      state.searchValue = keyword.toLowerCase()
    },
    RESET_FORM(state) {
      state.userEdit = undefined
    },
  },
  actions: {
    setLogin({ commit }, payload) {
      commit('SET_LOGIN', payload)
    },
    async setUser({ commit }, userId) {
      const data = await getUserById(userId)
      console.log('data: ', data)
      commit('SET_USER_ID', data)
    },
    openModal({ commit }) {
      commit('OPEN_MODAL')
    },
    resetForm({ commit }) {
      commit('RESET_FORM')
    },
    setUserEdit({ commit }, userId) {
      commit('SET_USER_EDIT', userId)
    },
    setKeyWord({ commit }, keyword) {
      commit('SET_SEARCH_VALUE', keyword)
    },
    async fetchUserApi({ commit }) {
      try {
        const userList = await getAllUserApi()
        commit('SET_USER', userList)
      } catch (error) {
        throw Error(error)
      }
    },
    async createUser({ commit }, userInfo) {
      try {
        const newUser = await createUserApi(userInfo)
        commit('ADD_USER', newUser)
        this.dispatch('fetchUserApi')
      } catch (err) {
        throw Error(err)
      }
    },
    async registerUser({ commit }, userInfo) {
      try {
        const newUser = await registerUserApi(userInfo)
        commit('ADD_USER', newUser)
        this.dispatch('fetchUserApi')
      } catch (err) {
        throw Error(err)
      }
    },
    async updateUser({ commit }, user) {
      try {
        const res = await updateUserApi(user)
        commit('UPDATE_USER', user)
        this.dispatch('fetchUserApi')
        return res
      } catch (err) {
        throw new Error(err)
      }
    },
    async removeUser({ commit }, userId) {
      try {
        const res = await removeUserApi(userId)
        commit('REMOVE_USER', userId)
        this.dispatch('fetchUserApi')

        return res
      } catch (err) {
        throw new Error(err)
      }
    },
  },
  getters: {
    getUserList: (state) => state.userList,
    getUserEdit: (state) => state.userEdit,
    searchValue: (state) => state.searchValue,
    getModalOpen: (state) => state.isModalOpen,
    getIsLogin: (state) => state.isLogin,
    getUser: (state) => state.user,
  },
})

export default store
