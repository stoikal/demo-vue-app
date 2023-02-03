import { RouteConfig } from 'vue-router'
import Login from '@/features/auth/views/LoginPage.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

const routes: RouteConfig[] = [
  {
    path: '',
    component: MainLayout,
    meta: { requireAuth: true },
    children: [
      {
        path: '/customers',
        name: 'CustomersIndex',
        meta: { requireAuth: true },
        component: async () => await import(
          /* webpackChunkName: "customers" */
          '@/features/customers/views/CustomersIndex.vue'
        ),
      },
    ],
  },
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
    ],
  },
]

export default routes
