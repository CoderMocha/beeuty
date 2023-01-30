import BeeText from './text.vue';

BeeText.install = (Vue) => {
	Vue.component(BeeText.name, BeeText);
};

export default BeeText;
