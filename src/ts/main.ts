// Import Base file
import { registerSW } from 'virtual:pwa-register';

// Import SCSS
import '/scss/site.scss';

// Import Libraries
import './libs/smoothScroll';
import './libs/modal';

// Import Namespace
import sample from './namespace/sample';

// Call Namespace
sample();

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
