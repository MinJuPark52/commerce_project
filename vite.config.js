import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/commerce-project/", // GitHub Pages에서 사용할 경로 (저장소 이름)
});
