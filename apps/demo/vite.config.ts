import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(() => {
  const useLocal = process.env.DEMO_USE_LOCAL === '1'
  const alias: Record<string, string> = {}
  if (useLocal) alias['hukibs'] = resolve(__dirname, '../../src')
  return {
    base: process.env.DEMO_BASE || '/demo/',
    plugins: [vue()],
    resolve: { alias },
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
