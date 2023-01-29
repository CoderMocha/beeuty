import BeeRadio from './radio.vue';
import BeeRadioGroup from './radio-group.vue';
BeeRadio.Group = BeeRadioGroup;

BeeRadio.install = (Vue) => {
	Vue.component(BeeRadio.name, BeeRadio);
};

export default BeeRadio;
