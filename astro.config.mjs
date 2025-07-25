// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://luminous-pegasus-505668.netlify.app",
  integrations: [preact()]
});