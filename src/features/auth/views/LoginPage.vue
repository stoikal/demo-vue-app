<template>
  <v-container fill-height>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="auto">
        <v-card width="577">
          <v-card-title class="justify-center">
            <h1 class="headline pb-4">
              LOGIN
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form
              v-model="form.isValid"
              @submit.prevent="submit"
            >
              <v-text-field
                v-model="form.value.email"
                dense
                placeholder="Email"
                outlined
                :rules="[rules.required]"
              />
              <v-text-field
                v-model="form.value.password"
                dense
                placeholder="Password"
                outlined
                type="password"
                :rules="[rules.required]"
              />
              <v-btn
                depressed
                color="primary"
                type="submit"
                :loading="form.isSubmitting"
                disabled
              >
                LOGIN
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import * as rules from '@/util/formRules'
import { useRouter } from '@/composables'
import useUserStore from '@/store/user'
import auth from '../api/auth'

const router = useRouter()
const userStore = useUserStore()

const form = reactive({
  isValid: false,
  isSubmitting: false,
  value: {
    email: '',
    password: '',
  },
})

async function submit (): Promise<void> {
  form.isSubmitting = true
  try {
    const res = await auth.createToken({
      email: form.value.email,
      password: form.value.password,
    })

    const { token } = res.data
    userStore.setToken(token)
    void router.push('/customers')
  } catch {
    // TODO handle error
  }
}
</script>
