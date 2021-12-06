/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// Import Base file
import { registerSW } from 'virtual:pwa-register';

// Import SCSS
import '/scss/site.scss';

// Import Libraries
import './libs/smoothScroll';
import './libs/modal';

// Import Svelte App
import App from './App.svelte';

// Render Svelte App
const targetElement = document.getElementById('app');
const app = new App({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: targetElement!,
});

export default app;

// Register SW
const updateSW = registerSW({
  onNeedRefresh() {
    console.log('onNeedRefresh');
  },
  onOfflineReady() {
    console.log('onOfflineReady');
  },
});

void updateSW();
