import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';        // ✅ Add Vue 3 support
import node from '@astrojs/node';
// https://docs.astro.build/en/guides/integrations-guide/vue/
export default defineConfig({
  integrations: [
    vue({
      // Enable Vue 3 features
      // e.g. reactivityTransform: true,
    }),
  ],
  image: {
    domains: ['cts-sport.com'],
  },
  output: 'server', // Enable SSR
  adapter: node({ mode: 'standalone' }),
  site: process.env.PUBLIC_SITE_URL || 'https://astro-frontend-production.up.railway.app',
  server: {
    host: true,                                  // Listen on all interfaces (0.0.0.0)
    port: Number(process.env.PORT) || 4321,      // Use Railway port
    headers: {
      // Default no-cache so data is always fresh
      'Cache-Control': 'no-store',
    },
  },
});
