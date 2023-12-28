import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), vueSetupExtend()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
