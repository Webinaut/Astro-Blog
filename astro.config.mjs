import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
//astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: netlify(),
  // legacy: {
  //   collections: true,
  // },
});
