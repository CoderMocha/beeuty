import BeeButton from "./components/button/button.vue";
import BeeButtonGroup from './components/button-group/button-group.vue';

const components = [
  BeeButton,
  BeeButtonGroup,
  // ...如果还有的话继续添加
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BeeButton,
  BeeButtonGroup,
  // ...如果还有的话继续添加
}
