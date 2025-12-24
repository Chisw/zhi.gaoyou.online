import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/gyzz': '/gyzz/vol-00/01-序文',
  },
});