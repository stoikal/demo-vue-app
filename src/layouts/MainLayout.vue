<template>
  <div class="layout-wrap">
    <TheNavigation />
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script lang="ts" setup>
import TheNavigation from '@/components/app/navigation/TheNavigation.vue'
</script>

<style scoped>
.layout-wrap {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
</style>
