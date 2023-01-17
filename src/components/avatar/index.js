import BeeAvatar from "./avatar.vue";

BeeAvatar.install = Vue => {
  Vue.component(BeeAvatar.name, BeeAvatar);
}

export default BeeAvatar;
