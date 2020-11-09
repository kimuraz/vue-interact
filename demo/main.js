import Vue from 'vue';
import App from './App';

import VueInteract from '../src/vue-interact';
import '../src/vue-interact/vue-interact-default.css';

Vue.config.productionTip = false;

Vue.use(VueInteract);

new Vue({
  render: h => h(App),
}).$mount('#app');
