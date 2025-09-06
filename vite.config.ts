import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from "vite-plugin-node-polyfills";
// https://vite.dev/config/
export default defineConfig({
    base: '/',
    cacheDir: '/tmp/.vite',
    server: {
        cors: true,
        port: 80,
        host: true,
        strictPort: true,
        hmr: {
            host: `portfolio.${process.env.DOMAIN}`,
            protocol: "wss",
            clientPort: 443
        },
        watch: { usePolling: true }
    },
    plugins: [
        react(),
        nodePolyfills(),
    ],
})
