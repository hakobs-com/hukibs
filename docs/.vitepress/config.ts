import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/',
  title: 'SilUI',
  description: 'Vue 3 UI component library',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Tables', link: '/tables' }
    ],
    sidebar: [
      { text: 'Introduction', link: '/' },
      {
        text: 'Components',
        link: '/components',
        items: [
          { text: 'UI', link: '/components#ui' },
          { text: 'Forms', link: '/components#forms' },
          { text: 'Feedback', link: '/components#feedback' },
          { text: 'Layout', link: '/components#layout' },
          { text: 'Tables', link: '/components#tables' },
          { text: 'Context', link: '/components#context' }
        ]
      },
      { text: 'Tables', link: '/tables' }
    ]
  }
  ,
  vite: {
    resolve: {
      alias: {
        '@sil/ui': resolve(__dirname, '../../src')
      }
    }
  }
})
