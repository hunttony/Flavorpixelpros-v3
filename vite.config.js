import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      '/health': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/contact': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },  
});