<template>
  <v-text-field
    v-bind="$attrs"
    :value="formattedValue"
    outlined
    dense
    :class="textAlignClass"
    @keypress="filterKeypress"
    @input="handleInput"
  >
    <template
      v-for="(_, name) in $slots"
      #[name]
    >
      <slot :name="name" />
    </template>
  </v-text-field>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const DECIMAL_SEPARATOR = ','

type Props = {
  value: number | string
  allowDecimals?: boolean
  textAlign?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  textAlign: 'left',
})

const emit = defineEmits(['input'])

const textAlignClass = computed(() => {
  return `align-${props.textAlign}`
})

const formattedValue = computed<string>(() => {
  if (typeof props.value === 'number') {
    return props.value.toLocaleString('id')
  }
  return props.value
})

function handleInput (str: string): void {
  const withoutThousandSeparator = str.replaceAll('.', '')
  const formattedDecimalSeparator = withoutThousandSeparator.replace(',', '.')
  const num = Number(formattedDecimalSeparator)
  emit('input', num)
}

function filterKeypress (event: KeyboardEvent): void {
  const keyPressed = event.key
  let keysAllowed = '0123456789'

  if (props.allowDecimals === true) {
    keysAllowed += DECIMAL_SEPARATOR
  }

  if (
    !keysAllowed.includes(keyPressed) ||
    (keyPressed === DECIMAL_SEPARATOR && formattedValue.value.includes(DECIMAL_SEPARATOR))
  ) {
    event.preventDefault()
  }
}
</script>

<style scoped>
.align-left >>> input {
  text-align: left;
}

.align-right >>> input {
  text-align: right;
}
</style>
