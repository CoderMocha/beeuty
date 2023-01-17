import Tag from "./tag.vue";
// import ButtonGroup from "./button-group.vue";
// Button.Group = ButtonGroup

Tag.install = Vue => {
  Vue.component(Tag.name, Tag);
}

export default Tag;
