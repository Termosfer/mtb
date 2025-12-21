import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build: {
    minify: "esbuild", // "terser" da istifadə edə bilərsən
    sourcemap: false,  // Prod üçün
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
