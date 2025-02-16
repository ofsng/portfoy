import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': dirname(fileURLToPath(import.meta.url)) + '/src'
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: dirname(fileURLToPath(import.meta.url)) + '/index.html',
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/images': 'http://localhost:3000'
    },
    watch: {
      usePolling: true,
    },
  }
});
