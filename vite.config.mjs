import { defineConfig } from 'vite';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    manifest: true,
    outDir: path.resolve(__dirname, 'web/dist/'),
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'src/js/app.js'),
      },
    },
    sourcemap: true
  },
  plugins: [
    manifestSRI(),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
    ViteRestart({
      reload: [
        'templates/**/*',
      ],
    }),
  ],
  publicDir: path.resolve(__dirname, 'src/public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/pcss'),
      '@js': path.resolve(__dirname, 'src/js'),
    },
  },
  server: {
    // Allow cross-origin requests -- https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6
    allowedHosts: true,
    cors: {
      origin: /(\.local|\.site|localhost)/
    },
    fs: {
      strict: false
    },
    headers: {
      "Access-Control-Allow-Private-Network": "true",
    },
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  }
}));
