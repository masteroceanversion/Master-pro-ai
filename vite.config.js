import { defineConfig } from "vite";
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/masterpro-ai/" : "/",
  build: { outDir: "dist", assetsDir: "assets" }
});
