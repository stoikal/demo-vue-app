import { authAxios } from '@/lib/axios'

export type Credentials = {
  email: string
  password: string
}

export default {
  async createToken (credentials: Credentials) {
    return await authAxios.post('/token', credentials)
  },
}
