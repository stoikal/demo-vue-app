import Vue from 'vue'
// pinia plugin has to be imported before router
// because it is used inside navigation guard
import pinia from './plugins/pinia'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  pinia,
  render: h => h(App),
}).$mount('#app')
