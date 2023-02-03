import { Node, nodeInputRule, nodePasteRule } from '@tiptap/core'

declare module '@tiptap/core' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Commands<ReturnType> {
    Shortcode: {
      setShortcode: (options: SetShortCodeCommandOptions) => ReturnType
    }
  }
}

type SetShortCodeCommandOptions = {
  code: string
}

const Shortcode = Node.create({
  name: 'shortcode',

  group: 'inline',

  inline: true,

  selectable: false,

  atom: true,

  addAttributes () {
    return {
      code: {
        default: '',
        parseHTML: element => element.innerHTML,
      },
    }
  },

  addPasteRules () {
    return [
      nodePasteRule({
        find: /{{\w+(?:\s\w+)?}}/g,
        type: this.type,
        getAttributes: (match) => {
          return {
            code: match[0],
          }
        },
      }),
    ]
  },

  addInputRules () {
    return [
      nodeInputRule({
        find: /{{\w+(?:\s\w+)?}}$/,
        type: this.type,
        getAttributes: (match) => {
          return {
            code: match[0],
          }
        },
      }),
    ]
  },

  addKeyboardShortcuts () {
    return {
      Backspace: () => this.editor.commands.command(
        ({ tr, state }) => {
          const { selection } = state
          const { empty, anchor } = selection

          let preventBackspace = false

          if (empty) {
            state.doc.nodesBetween(anchor - 1, anchor, (node, pos) => {
              if (node.type.name === this.name) {
                tr.insertText('', pos, pos + node.nodeSize)
                preventBackspace = true
              }
            })
          }

          return preventBackspace
        },
      ),
    }
  },

  addCommands () {
    return {
      setShortcode: ({ code }: SetShortCodeCommandOptions) => ({ commands }) => {
        return commands.insertContent(
          {
            type: this.name,
            attrs: {
              code,
            },
          },
        )
      },
    }
  },

  parseHTML () {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ]
  },

  renderHTML ({ node }) {
    return [
      'span',
      { 'data-type': this.name },
      node.attrs.code,
    ]
  },
})

export default Shortcode
