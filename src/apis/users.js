import axios from 'axios'

export const getAllUserApi = async () => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/users/getListUser',
    })
    return res.data
  } catch (error) {
    throw new Error(error)
  }
}
export const getUserById = async (id) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `http://localhost:3000/users/getUserById/${id}`,
    })
    return res.data
  } catch (error) {
    throw new Error(error)
  }
}
export const createUserApi = async (user) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/users/addUser',
      data: user,
    })
    return res.data
  } catch (error) {
    throw new Error(error)
  }
}

export const removeUserApi = async (id) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `http://localhost:3000/users/deleteUser/${id}`,
    })
    return res
  } catch (error) {
    throw new Error(error)
  }
}

export const updateUserApi = async (user) => {
  try {
    const { user_id } = user
    const res = await axios({
      method: 'PATCH',
      url: `http://localhost:3000/users/updateUser/${user_id}`,
      data: user,
    })
    return res.data
  } catch (error) {
    throw new Error(error)
  }
}

export const updatePassApi = async (user) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `http://localhost:3000/users/reset-password`,
      data: user,
    })
    console.log('res: ', res)

    // return res.data
  } catch (error) {
    throw new Error(error)
  }
}
