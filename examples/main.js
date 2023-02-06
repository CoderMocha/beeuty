import Vue from 'vue'
import App from './App.vue'

import '../src/style/index.scss';
import BeeUI from '../src/index';
Vue.use(BeeUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
