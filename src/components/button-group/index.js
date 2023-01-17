import buttonGroup from "./button-group.vue";

buttonGroup.install = Vue => {
  Vue.component(buttonGroup.name, buttonGroup);
}

export default buttonGroup;
