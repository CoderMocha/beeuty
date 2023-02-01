<template>
	<div :class="classes" :style="styles">
		<div class="info">
			<div class="expand-icon">+</div>
			<div class="title">{{ node.title }}</div>
		</div>
		<div :class="['children', { expanded }]">
			<bee-tree-node
				v-for="(child, childIndex) in node.children"
				:key="`node-${nodeIndex}-${childIndex}`"
				:node="child"
				:node-index="childIndex"
				:parent-level="level"
				@nodeClick="handleNodeClick(child)"
			/>
		</div>
	</div>
</template>

<script>
const prefixCls = 'bee__tree-node';
export default {
	name: 'BeeTreeNode',
	props: {
		node: Object,
		nodeIndex: [String, Number],
		parentLevel: Number,
	},
	data() {
		return {
			level: this.parentLevel + 1,
			expanded: false,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
		styles() {
			return {
				paddingLeft: `16px`,
			};
		},
	},
	methods: {
		handleNodeClick(node) {
			this.$emit('nodeClick', node);
		},
	},
};
</script>
