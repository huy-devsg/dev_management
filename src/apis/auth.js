import axios from 'axios'

export const userLoginApi = async (user) => {
  const res = await axios.post('http://localhost:3000/api/auth/login', user)
  const { accessToken } = res.data
  if (res.data.status === 201) {
    localStorage.setItem('accessToken', accessToken)
    return true
  } else {
    return false
  }
}

export const registerUserApi = async (user) => {
  const res = await axios.post('http://localhost:3000/api/auth/register', user)
  if (res.status === 201) {
    return true
  } else {
    return false
  }
}
