<template>
  <v-app-bar-title style="padding-left: 0;">
    <div class="title-container">
      <img
        :src="require('@/assets/logo.png')"
        class="title-logo"
      >
      <span class="title">Example</span>
    </div>
  </v-app-bar-title>
</template>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  height: 56px;
}

.title-logo {
  height: 56px;
}
</style>
