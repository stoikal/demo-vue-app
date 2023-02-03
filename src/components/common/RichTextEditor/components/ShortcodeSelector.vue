<template>
  <v-menu
    close-on-content-click
  >
    <template #activator="{ on }">
      <v-btn
        tile
        icon
        small
        :ripple="false"
        :disabled="disabled"
        v-on="on"
      >
        <v-icon small>
          data_object
        </v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item
        v-for="(item, index) of items"
        :key="index"
        @click="handleClick(item)"
      >
        <v-list-item-title>
          {{ item }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang=ts setup>
defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits(['select'])

const items = [
  '{{.Company}}',
  '{{.BillingInfo}}',
  '{{.BillingLink}}',
  '{{.User}}',
  '{{.VerificationLink}}',
]

function handleClick (str: string): void {
  emit('select', str)
}
</script>
