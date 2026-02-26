import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-deliverables/week6-intro-react-project/',
  plugins: [react()],
})
