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
})
