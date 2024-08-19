import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [mdx(), tailwind()],
  image: {
    domains: ["utfs.io"],
  },
  build: {
    format: "file",
  },
});
