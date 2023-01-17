import BeeButton from "./components/button";

const components = {
  BeeButton,
  BeeButtonGroup: BeeButton.Group,
};

const install = function(Vue, opts = {}) {
  Object.keys(components).map(componentKey => {
    Vue.component(components[componentKey].name, components[componentKey]);
  });
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BeeButton,
  BeeButtonGroup: BeeButton.Group,
  // ...如果还有的话继续添加
}
