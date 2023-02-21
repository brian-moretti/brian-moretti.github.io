// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio/index.html'),
        progettiStar2impact: resolve(__dirname, 'progetti-star2impact/index.html'),
      },
    },
  },
})
