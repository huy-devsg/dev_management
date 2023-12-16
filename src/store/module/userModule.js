import { registerUserApi } from '@/apis/auth'
import {
  createUserApi,
  getAllUserApi,
  getLinkAvatarApi,
  removeUserApi,
  updateUserApi,
} from '@/apis/users'

const state = {
  userList: [],
  userEdit: undefined,
}

const mutations = {
  SET_USER(state, payload) {
    state.userList = payload
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
  SET_USER_EDIT(state, userId) {
    state.userEdit = state.userList.find((user) => user.user_id === userId)
  },

  RESET_FORM(state) {
    state.userEdit = undefined
  },
}

const actions = {
  async fetchUserApi({ commit }) {
    try {
      const userList = await getAllUserApi()
      commit('SET_USER', userList)
    } catch (error) {
      throw Error(error)
    }
  },
  async getAvatarUser({ commit }) {
    try {
      const newUser = await getLinkAvatarApi()
      commit('ADD_USER', newUser)
      this.dispatch('fetchUserApi')
    } catch (err) {
      throw Error(err)
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
      console.log('res update: ', res)
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
  resetForm({ commit }) {
    commit('RESET_FORM')
  },
  setUserEdit({ commit }, userId) {
    commit('SET_USER_EDIT', userId)
  },
}

const getters = {
  getUserList: (state) => state.userList,
  getUserEdit: (state) => state.userEdit,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
