import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import react from '@astrojs/react'

// https://astro.build/config

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  redirects: {
    '/gyzz': '/gyzz/vol-00/01-序文',
  },
});