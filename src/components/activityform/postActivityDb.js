import axios from 'axios'

const postActivityDb = async activity => {
  const RUTA = import.meta.env.VITE_BASE_URL
  const endpoint = `${RUTA}/activities`
  try {
    const response = await axios.post(endpoint, activity)
    return response
  } catch (error) {
    return error.message
  }
}

export default postActivityDb
