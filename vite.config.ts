import { defineConfig } from 'vite';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import { resolve } from 'path';

const root = 'src';
export default defineConfig({
  server: {
    open: true
  },
  root: root,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, root, 'index.html'),
        sample: resolve(__dirname, root, 'sample/index.html')
      }
    }
  },
  plugins: [
    minifyHtml(),
    injectHtml({
      data: {
        title: 'VITAM開発環境サイト',
      },
    }),
  ],
})