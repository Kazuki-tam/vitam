import '/scss/style.scss';
import App from './App.svelte';

const targetElement = document.getElementById('app');
const app = new App({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: targetElement!
});

export default app;
