<template>
  <div class="layout-wrap">
    <v-app-bar
      app
      height="56"
      color="white"
      clipped-left
      elevation="1"
    >
      <TheNavigationTitle />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script lang="ts" setup>
import TheNavigationTitle from '@/components/app/navigation/TheNavigationTitle.vue'
</script>

<style scoped>
.layout-wrap {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
</style>
