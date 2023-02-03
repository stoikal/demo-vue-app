<template>
  <v-navigation-drawer
    v-model="model"
    clipped
    app
    class="elevation-1"
  >
    <v-list dense>
      <template v-for="(group, groupIndex) of menu">
        <v-list-group
          :key="groupIndex"
          :value="groupIndex === 0"
          :prepend-icon="group.icon"
          append-icon="arrow_drop_down"
        >
          <template #activator>
            <v-list-item-title>{{ group.title }}</v-list-item-title>
          </template>
          <template v-for="(item, itemIndex) of group.items">
            <v-list-item
              :key="itemIndex"
              :to="item.to"
              dense
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  value: boolean
}>()

const emit = defineEmits(['input'])

const model = computed({
  get () {
    return props.value
  },
  set (value) {
    emit('input', value)
  },
})

const menu = [
  {
    title: 'Example',
    icon: 'cloud_queue',
    items: [
      { text: 'Customers', to: '/customers' },
      { text: 'Products', to: '/products' },
      { text: 'Admin', to: '/admin' },
    ],
  },
]
</script>
