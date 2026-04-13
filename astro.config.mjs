// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://victorBBQ.github.io',
  base: '/networks-lab',
  vite: {
    plugins: [tailwindcss()],
  },
});