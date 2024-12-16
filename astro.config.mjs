import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: netlify(),
});
