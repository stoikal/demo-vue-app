import axios from 'axios'

const authAxios = axios.create({
  baseURL: process.env.VUE_APP_AUTH_SERVICE_URL,
})

authAxios.interceptors.response.use(
  (response) => {
    return response.data
  },
)

export default authAxios
