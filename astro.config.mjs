import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

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