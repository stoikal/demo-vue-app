import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import jwt from '@/util/jwt'

const useUserStore = defineStore('user', {
  state: () => ({
    _token: useLocalStorage('token', ''),
  }),
  getters: {
    token (state) {
      if (state._token.length > 0) {
        const { exp } = jwt.parsePayload(state._token)

        if (exp < Date.now() / 1000) {
          state._token = ''
        }
      }

      return state._token
    },
  },
  actions: {
    clearToken () {
      this._token = ''
    },
    setToken (token: string) {
      this._token = token
    },
  },
})

export default useUserStore
