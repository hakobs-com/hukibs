import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.DEMO_BASE || '/demo/',
  plugins: [vue()],
  resolve: {
    alias: {
      hukibs: resolve(__dirname, '../../src')
    }
  },
  server: {
    port: 5175
  }
})
