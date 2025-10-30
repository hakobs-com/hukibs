import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    base: '/demo/',
    plugins: [vue()],
    resolve: { 
      alias: {
        'hukibs': resolve(__dirname, '../../libs/hukibs/src')
      }
    },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: string, filename: string) => {
          return `@use "hukibs/style.scss" as ui;\n${content}`;
        },
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
    server: { port: 5175 }
  }
})
