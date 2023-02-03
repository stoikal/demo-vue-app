<template>
  <v-dialog
    v-model="model"
    width="475"
    persistent
  >
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-divider />

      <v-card-text>
        <slot />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          plain
          :disabled="loading"
          @click="model = false"
        >
          CANCEL
        </v-btn>
        <v-btn
          color="primary"
          depressed
          :loading="loading"
          @click="confirm"
        >
          CONFIRM
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  value: boolean
  title?: string
  loading?: boolean
}>()

const emit = defineEmits(['input', 'confirm'])
const model = useVModel(props, 'value', emit, { eventName: 'input' })

const confirm = (): void => {
  emit('confirm')
}
</script>
