import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        // Copia o arquivo de redirecionamento pro dist
        copyFileSync('public/_redirects', 'dist/_redirects')
      },
    },
  ],
})
