import BeeTag from './tag.vue';

BeeTag.install = (Vue) => {
	Vue.component(BeeTag.name, BeeTag);
};

export default BeeTag;
