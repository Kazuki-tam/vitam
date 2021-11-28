import '/scss/common.scss';
import App from './App.svelte';
import MicroModal from 'micromodal';
MicroModal.init();

const targetElement = document.getElementById('app');
const app = new App({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: targetElement!
});

export default app;
