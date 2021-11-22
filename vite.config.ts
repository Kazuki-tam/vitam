import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { siteData, pagesData } from './site.config';

export default defineConfig({
  server: {
    open: true
  },
  root: siteData.root,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, siteData.root, 'index.html'),
        sample: resolve(__dirname, siteData.root, 'sample/index.html')
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, siteData.root, '_partials'),
      context(pagePath) {
        return pagesData[pagePath];
      },
    }),
  ],
})