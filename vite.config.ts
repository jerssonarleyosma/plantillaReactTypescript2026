import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Plantilla/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'Plantilla',
    rollupOptions: {
      output: {
        entryFileNames: 'js-css/[name]-[hash].js',

        chunkFileNames: 'js-css/[name]-[hash].js',

        assetFileNames: (assetInfo) => {
          const nombre = assetInfo.names?.[0] ?? ''

          if (nombre.endsWith('.css')) {
            return 'js-css/[name]-[hash][extname]'
          }
          if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(nombre)) {
            return 'assets/images/[name]-[hash][extname]'
          }

          if (/\.(woff2?|ttf|otf|eot)$/i.test(nombre)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }

          return 'assets/otros/[name]-[hash][extname]'
        },
      },
    },
  },
})
