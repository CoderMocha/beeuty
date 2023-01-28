import BeeBadge from './badge.vue';

BeeBadge.install = (Vue) => {
	Vue.component(BeeBadge.name, BeeBadge);
};

export default BeeBadge;
