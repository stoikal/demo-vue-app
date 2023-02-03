import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import authGuard from './middlewares/auth-guard'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(authGuard)

export default router
