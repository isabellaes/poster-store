import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/admin/login": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
      },
      "/api/public/products": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
      },
      "/api/private/products": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
      },
      "/api/private/orders": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
      },
      "/api/private/users": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
