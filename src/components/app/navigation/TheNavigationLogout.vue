<template>
  <v-btn
    plain
    :ripple="false"
    @click="logout"
  >
    <v-icon>logout</v-icon>
    <span class="text-capitalize px-1">Logout</span>
  </v-btn>
</template>

<script lang="ts" setup>
import { useRouter } from '@/composables'
import useUserStore from '@/store/user'

const router = useRouter()
const userStore = useUserStore()

function logout (): void {
  userStore.clearToken()
  void router.push('/login')
}
</script>
