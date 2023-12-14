import axios from 'axios'
const BASE_URL = 'http://localhost:3000'
let instance = null

export const createAxiosInstance = () => {
  const token = localStorage.getItem('accessToken')
  instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
export const getAllUserApi = async () => {
  try {
    if (!instance) {
      createAxiosInstance()
    }
    const res = await instance.get(`${BASE_URL}/api/users/getListUser`)
    return res.data
  } catch (error) {
    throw new Error(error)
  }
}
export const getUserById = async () => {
  try {
    if (!instance) {
      createAxiosInstance()
    }
    const res = await instance.get(`${BASE_URL}/api/users/getUserById`)
    return res.data
  } catch (error) {
    throw new Error(error)
  }
}
export const createUserApi = async (user) => {
  try {
    if (!instance) {
      createAxiosInstance()
    }
    const res = await instance.post(`${BASE_URL}/api/users/addUser`, user)
    return res.data
  } catch (error) {
    throw new Error(error)
  }
}

export const removeUserApi = async (id) => {
  try {
    if (!instance) {
      createAxiosInstance()
    }
    const res = await instance.delete(`${BASE_URL}/api/users/deleteUser/${id}`)
    return res
  } catch (error) {
    throw new Error(error)
  }
}

export const updatePassApi = async (user) => {
  try {
    const res = await axios.patch(`${BASE_URL}/api/users/ResetPassword`, user)
    return res.data.status === 200 ? true : false
  } catch (error) {
    throw new Error(error)
  }
}

export const updateUserApi = async (user) => {
  try {
    if (!instance) {
      await createAxiosInstance()
    }
    const { user_id } = user
    const res = await instance.patch(
      `${BASE_URL}/api/users/updateUser/${user_id}`,
      user
    )

    return res.data
  } catch (error) {
    throw new Error(error)
  }
}
