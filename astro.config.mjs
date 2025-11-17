import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lilsammytrautmanssandbox.com/',
  output: 'server',
  server: {
    open: true,
  },
  integrations: [react(), mdx(), partytown(), sitemap()],
  adapter: netlify(),
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
