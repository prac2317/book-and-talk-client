import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@type': path.resolve(__dirname, 'src/type'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    global: 'window',
  },
});
