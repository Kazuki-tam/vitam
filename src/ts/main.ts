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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => {
      console.log(reg);
    })
    .catch((error) => {
      console.log('Registration failed with', error);
    });
}
