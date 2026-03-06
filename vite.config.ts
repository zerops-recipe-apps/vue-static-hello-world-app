import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    // Captured when `vite build` runs — changes on every rebuild.
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
