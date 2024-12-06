import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/PortfolioGame2/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  plugins: [react(), glslify()],
  assetsInclude: ["**/*.glb", "**/*.png"],
});
