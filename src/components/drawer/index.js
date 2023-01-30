import BeeDrawer from './drawer.vue';

BeeDrawer.install = (Vue) => {
	Vue.component(BeeDrawer.name, BeeDrawer);
};

export default BeeDrawer;
