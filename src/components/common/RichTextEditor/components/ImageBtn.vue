<template>
  <label ref="labelRef">
    <v-btn
      small
      icon
      tile
      :ripple="false"
      :disabled="disabled"
      @click="handleClick"
    >
      <v-icon small>
        image
      </v-icon>
    </v-btn>
    <input
      ref="inputRef"
      type="file"
      accept=".jpg, .jpeg, .png"
      class="d-none"
      @input="handleImageInput"
    >
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits(['input'])

const inputRef = ref<HTMLInputElement | null>(null)

function clearPreviousValue (): void {
  if (inputRef.value !== null) {
    inputRef.value.value = ''
  }
}

function handleClick (): void {
  if (inputRef.value !== null) {
    clearPreviousValue()

    inputRef.value.click()
  }
}

function handleImageInput (e: Event): void {
  const element = e.target as HTMLInputElement
  const file = element.files?.[0] as File

  emit('input', file)
}
</script>
