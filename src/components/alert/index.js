import BeeAlert from './alert.vue';

BeeAlert.install = (Vue) => {
	Vue.component(BeeAlert.name, BeeAlert);
};

export default BeeAlert;
