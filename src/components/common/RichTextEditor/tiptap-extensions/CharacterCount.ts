import CharacterCount from '@tiptap/extension-character-count'

export default CharacterCount.extend({
  onBeforeCreate () {
    this.storage.characters = (options) => {
      const node = options?.node ?? this.editor.state.doc
      const mode = options?.mode ?? this.options.mode

      if (mode === 'textSize') {
        const text = node.textBetween(0, node.content.size)

        return text.length
      }

      return node.nodeSize
    }
  },
})
