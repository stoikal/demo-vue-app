<template>
  <v-btn
    tile
    icon
    small
    :ripple="false"
    :disabled="disabled"
    :class="{ 'active': active }"
    v-on="$listeners"
  >
    <v-icon small>
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  disabled?: boolean
  active?: boolean
}>()
</script>

<style scoped>
.active {
  background-color: #353535;
  color: white !important;
}
</style>
