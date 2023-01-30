import BeeTooltip from './tooltip.vue';

BeeTooltip.install = (Vue) => {
	Vue.component(BeeTooltip.name, BeeTooltip);
};

export default BeeTooltip;
