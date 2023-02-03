<template>
  <div class="editor__menu">
    <div class="editor__btn-wrap">
      <BaseBtn
        :active="editor.isActive('bold')"
        icon="format_bold"
        @click="toggleBold"
      />
      <BaseBtn
        :active="editor.isActive('italic')"
        icon="format_italic"
        @click="toggleItalic"
      />
      <BaseBtn
        :active="editor.isActive('underline')"
        icon="format_underline"
        @click="toggleUnderline"
      />

      <div class="editor__btn-divider" />

      <ShortcodeSelector
        @select="insertCode"
      />

      <ImageBtn
        disabled
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Editor } from '@tiptap/vue-2'
import BaseBtn from './BaseBtn.vue'
import ShortcodeSelector from './ShortcodeSelector.vue'
import ImageBtn from './ImageBtn.vue'

const props = defineProps<{
  editor: Editor
}>()

function toggleBold (): void {
  props.editor.chain().focus().toggleBold().run()
}

function toggleItalic (): void {
  props.editor.chain().focus().toggleItalic().run()
}

function toggleUnderline (): void {
  props.editor.chain().focus().toggleUnderline().run()
}

function insertCode (code: string): void {
  props.editor
    .chain()
    .focus()
    .setShortcode({ code })
    .run()
}
</script>

<style scoped>
.editor__menu {
  border-bottom: 1px solid #aeaeae;
  padding: 6px;
}

.editor__btn-divider {
  display: inline-block;
  height: 1rem;
  vertical-align: middle;
  margin: 0 .5rem;
  border-right: 1px solid #aeaeae;
}
</style>
