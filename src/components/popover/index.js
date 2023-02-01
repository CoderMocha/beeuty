import BeePopover from './popover.vue';

BeePopover.install = (Vue) => {
	Vue.component(BeePopover.name, BeePopover);
};

export default BeePopover;
