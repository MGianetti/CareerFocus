import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@theme": path.resolve(__dirname, "src/theme.tsx"),
    },
  },
  plugins: [react()],
});
