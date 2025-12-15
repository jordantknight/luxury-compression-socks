import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/luxury-compression-socks/', // Commented out for local/ngrok preview
  server: {
    allowedHosts: true,
  },
})
