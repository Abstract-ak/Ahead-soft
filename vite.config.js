import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Ahead-soft/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: "5173",
  },

  preview: {
    port: 5173,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
