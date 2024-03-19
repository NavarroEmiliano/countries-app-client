import axios from 'axios'

const RUTA = import.meta.env.VITE_BASE_URL

const deleteActivity = async id => {
  const endpoint = `${RUTA}/activities/${id}`
  try {
    const response = await axios.delete(endpoint)
    return response
  } catch (error) {
    return error.message
  }
}

export default deleteActivity
