import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

export default defineConfig({
  site: isCustomDomain ? 'https://fitguideai.com' : 'https://atabhatti.github.io',
  base: isCustomDomain ? '/' : '/fitguideai-web',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
