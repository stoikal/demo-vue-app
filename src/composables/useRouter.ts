import { getCurrentInstance } from 'vue'
import VueRouter from 'vue-router'

export function useRouter (): VueRouter {
  const inst = getCurrentInstance()

  if (inst !== null) {
    return inst.proxy.$root.$router
  }

  return undefined as any
}
