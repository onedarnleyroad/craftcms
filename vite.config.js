import ViteRestart from 'vite-plugin-restart';
import path from 'path';

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: path.resolve('./web/dist/'),
    rollupOptions: {
      input: {
        app: path.resolve('./src/js/app.js'),
      },
    },
  },
  plugins: [
    ViteRestart({
      reload: [
        path.resolve('./templates/**/*'),
      ],
    }),
  ],
  publicDir: path.resolve('./src/public'),
  resolve: {
    alias: {
      '@js': path.resolve('./src/js'),
      '@css': path.resolve('./src/css'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true
  }
});
