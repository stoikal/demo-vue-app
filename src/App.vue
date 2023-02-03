<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@font-face {
  font-family: 'TT Norms';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('@/assets/fonts/ttnorms-medium.woff2') format('woff2'),
       url('@/assets/fonts/ttnorms-medium.woff') format('woff');
}

@font-face {
  font-family: 'TT Norms';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('@/assets/fonts/ttnorms-bold.woff2') format('woff2'),
       url('@/assets/fonts/ttnorms-bold.woff') format('woff');
}

// Here I have to use global selector to override vuetify styling
// because scss variable is not available
// Original values are mentioned in inline comment

.v-application {
  font-variant-ligatures: no-common-ligatures; // unset
}

.v-btn--plain {
  &:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) {
    & .v-btn__content {
      opacity: 1 !important; // 0.62
    }
  }
}

.v-list .v-list-item--active {
  & .v-list-item__title {
    font-weight: 700; // 500
  }
}

.theme--light.v-card > .v-card__text,
.theme--light.v-card > .v-card__subtitle {
  color: #353535 !important; // text--secondary
}

.v-text-field--outlined.v-input--dense {
  & legend {
    width: 0px !important; // dynamic according to label text length
  }

  & .v-label--active {
    // translateY(-16px) scale(0.75)
    transform: translateY(-8px) scale(0.75) !important;

    // Lower input position if label is shown
    & ~ input {
      padding: 20px 0 8px; // 8px 0 8px
    }

    // Lower v-select selection position if label is shown
    & ~ .v-select__selections > .v-select__selection--comma {
      margin: 12px 4px 0px 0 !important;
    }
  }

  & .v-label--active {
    // translateY(-16px) scale(0.75)
    transform: translateY(-8px) scale(0.75) !important;

    // Lower input position if label is shown
    & ~ input {
      padding: 20px 0 8px; // 8px 0 8px
    }

    // Lower v-select selection position if label is shown
    & ~ .v-select__selections > .v-select__selection--comma {
      margin: 12px 4px 0px 0 !important;
    }
  }
}

.v-application--is-ltr .v-alert__icon {
  margin-right: 8px !important; // 16px
}

.v-alert.align-icon-center .v-alert__icon {
  align-self: center !important;
}

.v-text-field--outlined.v-input--is-disabled > .v-input__control > .v-input__slot {
  background-color: #ebebeb; // transparent
}

.v-text-field.v-text-field--outlined {
  & .v-input__prepend-inner,
  & .v-input__append-inner {
    align-self: center !important; // flex-start
  }
}
</style>
