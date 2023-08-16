// Import Base file
import { registerSW } from 'virtual:pwa-register';
import 'virtual:svg-icons-register';

// Import SCSS
import '/scss/site.scss';

// Import Namespace
import sample from './namespace/sample';

// Call Namespace
const checkSamplePage = document.getElementById('sample');
if (checkSamplePage) {
  sample();
}

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
