<template>
  <div>
    <v-app-bar
      app
      height="56"
      color="white"
      clipped-left
      elevation="1"
    >
      <TheNavigationDrawerToggle
        @click="isDrawerShown = !isDrawerShown"
      />
      <TheNavigationTitle />
      <v-spacer />
      <TheNavigationLogout />
    </v-app-bar>

    <TheNavigationDrawer
      v-model="isDrawerShown"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheNavigationTitle from './TheNavigationTitle.vue'
import TheNavigationDrawer from './TheNavigationDrawer.vue'
import TheNavigationDrawerToggle from './TheNavigationDrawerToggle.vue'
import TheNavigationLogout from './TheNavigationLogout.vue'

const isDrawerShown = ref(true)
</script>
