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
    const users = res.data

    const userWithAvatarPromises = users.map(async (user) => {
      const avatar = await getLinkAvatarById(user.user_id)
      return { ...user, avatar }
    })
    const usersWithAvatar = await Promise.all(userWithAvatarPromises)
    return usersWithAvatar
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
    return { ...res.data, avatar: await getLinkAvatarApi() }
  } catch (error) {
    throw new Error(error)
  }
}
const getAvatarName = async () => {
  try {
    if (!instance) {
      createAxiosInstance()
    }
    const res = await instance.get(`${BASE_URL}/api/users/getLinkAvatar`)
    return res.data.data.avatar_link
  } catch (err) {
    throw new Error(err)
  }
}
const getLinkAvatarById = async (userId) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/users/getLinkAvatar/${userId}`)
    const avatarName = res.data.data.avatar_link
    const getBase = await axios.post(`${BASE_URL}/api/users/getFile`, {
      name: avatarName,
    })
    const bytes = new Uint8Array(getBase.data.data)
    const binary = bytes.reduce(
      (data, b) => (data += String.fromCharCode(b)),
      ''
    )
    const imgSrc = 'data:image/jpeg;base64,' + btoa(binary)
    return imgSrc
  } catch {
    throw new Error()
  }
}
export const getLinkAvatarApi = async () => {
  try {
    const getName = await getAvatarName()
    if (getName) {
      if (!instance) {
        createAxiosInstance()
      }
      const res = await instance.post(`${BASE_URL}/api/users/getFile`, {
        name: getName,
      })
      const bytes = new Uint8Array(res.data.data)
      const binary = bytes.reduce(
        (data, b) => (data += String.fromCharCode(b)),
        ''
      )
      const imgSrc = 'data:image/jpeg;base64,' + btoa(binary)
      return imgSrc
    }
  } catch {
    throw new Error()
  }
}

export const uploadAvatarApiById = async (formData, userId) => {
  console.log('formData: ', formData)
  try {
    if (!instance) {
      createAxiosInstance()
    }
    const res = await instance.post(
      `${BASE_URL}/api/users/UploadAvatar/${userId}`,
      formData
    )
    console.log('res uploadAvatarApiById: ', res)

    return res
  } catch (error) {
    throw new Error(error)
  }
}

export const uploadAvatarApi = async (formData) => {
  console.log('formData: ', formData)
  try {
    if (!instance) {
      createAxiosInstance()
    }
    const res = await instance.post(
      `${BASE_URL}/api/users/UploadAvatar`,
      formData
    )
    console.log('res: ', res)

    return res
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
