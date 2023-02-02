import BeeCollapse from './collapse.vue';
import BeeCollapsePane from './collapse-pane.vue';
BeeCollapse.Pane = BeeCollapsePane;

BeeCollapse.install = (Vue) => {
	Vue.component(BeeCollapse.name, BeeCollapse);
};

export default BeeCollapse;
