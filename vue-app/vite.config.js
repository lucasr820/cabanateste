import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      webp: {
        quality: 80,        // 0-100 · 80 é o ponto ideal qualidade/tamanho
        lossless: false,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
    }),
  ],
})
