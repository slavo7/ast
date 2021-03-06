// Use this sandbox to play with the compiler
const { getCompiler } = require('./index')

const ast = {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Print the lines which contain ',
        },
        {
          type: 'inlineCode',
          value: 'eth0',
        },
        {
          type: 'text',
          value: ' by pipelining ',
        },
        {
          type: 'inlineCode',
          value: 'ifconfig',
        },
        {
          type: 'text',
          value: ' ‘s output :',
        },
      ],
    },
    {
      type: 'questionCode',
      lang: 'bash',
      value: '$ ??? ??? ??? eth0',
      children: [
        {
          type: 'questionCodeLine',
          children: [
            {
              lang: 'bash',
              type: 'code',
              value: '$ ',
            },
            {
              type: 'questionGap',
              value: '???',
            },
            {
              lang: 'bash',
              type: 'code',
              value: ' ',
            },
            {
              type: 'questionGap',
              value: '???',
            },
            {
              lang: 'bash',
              type: 'code',
              value: ' ',
            },
            {
              type: 'questionGap',
              value: '???',
            },
            {
              lang: 'bash',
              type: 'code',
              value: ' eth0',
            },
          ],
        },
      ],
    },
    {
      type: 'list',
      ordered: false,
      start: null,
      loose: false,
      children: [
        {
          type: 'listItem',
          loose: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'inlineCode',
                  value: 'ifconfig',
                },
              ],
            },
          ],
          correct: true,
        },
        {
          type: 'listItem',
          loose: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'inlineCode',
                  value: '|',
                },
              ],
            },
          ],
          correct: true,
        },
        {
          type: 'listItem',
          loose: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'inlineCode',
                  value: 'grep',
                },
              ],
            },
          ],
          correct: true,
        },
        {
          type: 'listItem',
          loose: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'inlineCode',
                  value: '>',
                },
              ],
            },
          ],
          correct: false,
        },
        {
          type: 'listItem',
          loose: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'inlineCode',
                  value: '>>',
                },
              ],
            },
          ],
          correct: false,
        },
      ],
      answers: true,
    },
  ],
}

const x = getCompiler('insight').compileSync(ast)

process.stdout.write(x)
