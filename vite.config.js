import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Simple Calculator',
        short_name: 'Calculator',
        description: 'A simple calculator built with React and Vite',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'fullscreen', // حالت تمام‌صفحه واقعی
        orientation: 'portrait', // فقط حالت عمودی
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})