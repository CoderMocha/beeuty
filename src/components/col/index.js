import BeeCol from "./col.vue";

BeeCol.install = Vue => {
  Vue.component(BeeCol.name, BeeCol);
}

export default BeeCol;
