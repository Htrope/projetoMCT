import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        const src = path.resolve(__dirname, './public/_redirects')
        const dest = path.resolve(__dirname, './dist/_redirects')
        copyFileSync(src, dest)
        console.log('✅ _redirects copiado para dist/')
      },
    },
  ],
})
