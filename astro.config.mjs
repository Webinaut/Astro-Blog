import { defineConfig } from "astro/config";

//astro.build/config
import preact from "@astrojs/preact";
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), swup()],
});
