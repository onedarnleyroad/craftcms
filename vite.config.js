import ViteRestart from 'vite-plugin-restart';
import path from 'path';

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default ({ command }) => ({
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
  },
  plugins: [
    ViteRestart({
      reload: [
        path.resolve(__dirname, 'templates/**/*'),
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
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
});
