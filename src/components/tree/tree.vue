<template>
	<div :class="classes">
		<bee-tree-node
			v-for="(node, nodeIndex) in data"
			:key="`node-${nodeIndex}`"
			:node="node"
			:node-index="`${nodeIndex}`"
			:parent-level="0"
			@nodeClick="handleNodeClick(node)"
		/>
	</div>
</template>

<script>
import BeeTreeNode from './tree-node.vue';

const prefixCls = 'bee__tree';
export default {
	name: 'BeeTree',
	components: { BeeTreeNode },
	props: {
		data: Array,
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
	methods: {
		handleNodeClick(node) {
			this.$emit('nodeClick', node);
		},
	},
};
</script>
