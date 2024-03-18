import axios from 'axios'

const postActivityDb = async activity => {
  const RUTA = process.env.BASE_URL
  const endpoint = `${RUTA}/activities`
  try {
    const response = await axios.post(endpoint, activity)
    return response
  } catch (error) {
    return error.message
  }
}

export default postActivityDb
