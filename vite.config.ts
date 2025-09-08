import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 👈 добавляем, чтобы сайт открывался с корня
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
