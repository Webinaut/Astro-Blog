import { defineConfig } from "astro/config";

//astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()]
});