import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from "vite-plugin-node-polyfills";
// https://vite.dev/config/
export default defineConfig({
  base: '/web-portfolio-2.0/',
  plugins: [
      react(),
      nodePolyfills(),
  ],
  server: {
      cors: true,
      port: 80,
      host: true,
      strictPort: true,
      hmr: {
          host: `${process.env.DOMAIN}`,
          protocol: "wss",
          clientPort: 443,
      },
      watch: { usePolling: true }
  },
})
