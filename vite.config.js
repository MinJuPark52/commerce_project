import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/commerce_project/", // GitHub Pages에서 사용할 경로
});
