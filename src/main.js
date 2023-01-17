import Vue from 'vue'
import App from './App.vue'

import './style/index.scss';
import BeeUI from './index';
Vue.use(BeeUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
