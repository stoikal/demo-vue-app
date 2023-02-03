import { Route, NavigationGuardNext } from 'vue-router'
import useUserStore from '@/store/user'

async function authGuard (
  to: Route,
  from: Route,
  next: NavigationGuardNext,
): Promise<void> {
  const LOGIN_PATH = '/login'
  const requireAuth = Boolean(to.meta?.requireAuth)
  const { token } = useUserStore()
  const isLoggedIn = token !== null && token.length > 0

  if (
    to.path !== LOGIN_PATH &&
    requireAuth &&
    !isLoggedIn
  ) {
    return next(LOGIN_PATH)
  }

  return next()
}

export default authGuard
