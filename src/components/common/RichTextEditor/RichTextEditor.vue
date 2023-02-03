<template>
  <div style="width: 100%;">
    <template v-if="editor">
      <div class="editor">
        <EditorMenu
          :editor="editor"
        />
        <EditorContent
          :editor="editor"
          class="editor__content"
        />
        <v-progress-linear
          v-if="loading"
          indeterminate
        />
      </div>
      <div class="editor__char-counter">
        {{ editor.storage.characterCount.characters() }}/{{ charLimit }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import EditorMenu from './components/EditorMenu.vue'
import Shortcode from './tiptap-extensions/Shortcode'
import CharacterCount from './tiptap-extensions/CharacterCount'

type Props = {
  value: string
  placeholder?: string
  charLimit?: number
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  charLimit: 300,
})

const emit = defineEmits(['input'])

const editor = ref<any>(null)

watch(() => props.value, (value) => {
  if (editor.value === null) return

  const isSame = value === editor.value.getHTML()

  if (!isSame) {
    editor.value.commands.setContent(value, false)
  }
})

onMounted(() => {
  editor.value = new Editor({
    content: '',
    extensions: [
      StarterKit,
      Underline,
      Shortcode,
      Placeholder.configure({
        placeholder: props.placeholder,
      }),
      CharacterCount.configure({
        limit: props.charLimit,
        mode: 'textSize',
      }),
      Image.configure({
        allowBase64: true,
      }),
    ],
    onUpdate ({ editor }) {
      emit('input', editor.getHTML())
    },
  })
})

onBeforeUnmount(() => {
  editor.value.destroy()
})

const loading = ref(false)
</script>

<style lang="scss" scoped>
.editor {
  border: 1px solid #aeaeae;
  border-radius: 4px;
}

.editor__content {
  ::v-deep .ProseMirror {
    padding: 8px;
    min-height: 160px;

    &:focus-visible {
      outline: none;
    }

    & p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: #aeaeae;
      pointer-events: none;
      height: 0;
    }

    & img {
      max-width: 100%;
      height: auto;

      &.ProseMirror-selectednode {
        outline: 3px solid #25D7F9;
      }

    }

    &[contenteditable=false] {
      user-select: none;
      pointer-events: none;
    }

    & div[data-type="spinner"] {
      position: relative;
      display: grid;
      place-items: center;
      height: 80px;

      &::before, &::after {
        position: absolute;
        transform: translate(-50%);
        content: '';
        border: 4px solid #000;
        border-radius: 50%;
        border-color: #000 transparent transparent;
        width: 40px;
        height: 40px;
        animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      }

      &::after {
        animation-delay: -0.15s;
      }
    }
  }
}

.editor__char-counter {
  text-align: right;
  font-size: 12px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
