import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
        about: "./src/pages/About.jsx",
        HireMe: "./src/pages/HireMe.jsx",
        Projects:"./src/pages/Status.jsx",
      },
    },
    outDir: "../_server/core/static/core"
  },
  base: "/static/"
})
