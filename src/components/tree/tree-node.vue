<template>
	<div :class="classes">
		<div class="node">
			<div class="icon"></div>
			<div class="name"></div>
		</div>
		<div class="children">
			<bee-tree-node
				v-for="(child, childIndex) in node.children"
				:key="`node-${nodeIndex}-${childIndex}`"
				:node="child"
				:node-index="childIndex"
				@nodeClick="handleNodeClick(child)"
			/>
		</div>
	</div>
</template>

<script>
const prefixCls = 'bee__tree-item';
export default {
	name: 'BeeTreeNode',
	props: {
		node: Object,
		nodeIndex: String,
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
	methods: {
		handleNodeClick() {
			this.$emit('nodeClick', node);
		},
	},
};
</script>
