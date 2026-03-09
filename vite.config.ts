import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules/three')) return 'three'
                    if (id.includes('node_modules/@tsparticles')) return 'tsparticles'
                    if (id.includes('node_modules/framer-motion')) return 'framer-motion'
                },
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss(),
                autoprefixer(),
            ],
        },
    },
})
