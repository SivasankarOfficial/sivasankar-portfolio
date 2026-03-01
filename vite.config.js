import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this base matching your repo name: /repository-name/
  base: '/sivasankar-portfolio/',
})
