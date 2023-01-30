import BeeTree from './tree.vue';

BeeTree.install = (Vue) => {
	Vue.component(BeeTree.name, BeeTree);
};

export default BeeTree;
