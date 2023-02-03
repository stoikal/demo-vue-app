import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import colors from '@/constants/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green,
        secondary: colors.orange,
        accent: colors.lilac,
        error: colors.red,
        info: colors.black,
        success: colors.green,
        warning: colors.orange,
        ...colors,
      },
    },
  },
  breakpoint: {
    mobileBreakpoint: 'sm',
  },
  icons: {
    iconfont: 'md',
  },
})
