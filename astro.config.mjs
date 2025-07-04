import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://lilsammytrautmanssandbox.com/',
  integrations: [react()],
  adapter: netlify(),
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
