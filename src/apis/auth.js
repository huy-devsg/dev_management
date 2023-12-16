import axios from 'axios'
const BASE_URL = 'http://localhost:3000'
export const userLoginApi = async (user) => {
  const res = await axios.post(`${BASE_URL}/api/auth/login`, user)
  const { accessToken } = res.data
  if (res.data.status === 201) {
    localStorage.setItem('accessToken', accessToken)
    return true
  } else {
    return false
  }
}
export const registerUserApi = async (user) => {
  const res = await axios.post(`${BASE_URL}/api/auth/register`, user)
  return res.data
}
export const checkLogin = async () => {
  const token = localStorage.getItem('accessToken')
  if (!token) {
    return false
  }

  try {
    const res = await axios.get(`${BASE_URL}/api/auth/CheckLogin`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.data.token) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}
export const checkTokenEmail = async (token) => {
  if (!token) {
    return false
  }
  try {
    const res = await axios.get(`${BASE_URL}/api/auth/CheckTokenEmail`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.data.token) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}
