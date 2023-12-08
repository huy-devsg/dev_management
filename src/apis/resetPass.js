import axios from 'axios'
export const sendMailReset = async (body) => {
  try {
    const data = await axios.post(
      'http://localhost:3000/reset-password/send',
      body
    )
    data.status === 201 ? true : false
  } catch {
    throw Error()
  }
}
