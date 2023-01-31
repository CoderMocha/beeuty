import BeeCollapse from './collapse.vue';
import BeeCollapseItem from './collapse-item.vue';
BeeCollapse.Item = BeeCollapseItem;

BeeCollapse.install = (Vue) => {
	Vue.component(BeeCollapse.name, BeeCollapse);
};

export default BeeCollapse;
