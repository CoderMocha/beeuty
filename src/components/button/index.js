import BeeButton from "./BeeButton.vue";

BeeButton.install = Vue => {
  Vue.component(BeeButton.name, BeeButton);
}

export default BeeButton;
