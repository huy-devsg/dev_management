import { jwtDecode } from 'jwt-decode'

export const decodeToken = (token) => {
  try {
    const decoded = jwtDecode(token)
    return decoded
  } catch (error) {
    console.error('Error decoding token:', error)
    return null
  }
}

export const isLoggedIn = (token) => {
  const decoded = decodeToken(token)
  return decoded
}
