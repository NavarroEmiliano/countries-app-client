import axios from 'axios'

const updateActivity = async activity => {
  const RUTA = import.meta.env.VITE_BASE_URL
  const endpoint = `${RUTA}/activities`
  try {
    const response = await axios.put(endpoint, activity)
    return response
  } catch (error) {
    return error.message
  }
}

export default updateActivity
