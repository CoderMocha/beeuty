import BeeCount from './count.vue';

BeeCount.install = (Vue) => {
	Vue.component(BeeCount.name, BeeCount);
};

export default BeeCount;
