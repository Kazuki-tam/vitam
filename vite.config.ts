import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { siteData, pagesData } from './site.config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import viteImagemin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa'

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
    VitePWA({
      manifest: {
        "theme_color": siteData.themeColor,
        "background_color": siteData.themeColor,
        "display": "browser",
        "scope": "/",
        "start_url": "/",
        "name": siteData.siteName,
        "short_name": siteData.shortName,
        "description": siteData.description,
        "icons": [
          {
            "src": "/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/pwa-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/pwa-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    svelte(),
    handlebars({
      partialDirectory: resolve(__dirname, siteData.root, '_partials'),
      context(pagePath) {
        return pagesData[pagePath];
      },
    }),
  ],
})
