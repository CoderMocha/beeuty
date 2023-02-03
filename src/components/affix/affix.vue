<template>
	<div>
		<div ref="point" :class="classes">
			<slot></slot>
		</div>
		<div v-show="slot"></div>
	</div>
</template>

<script>
const prefixCls = 'bee__affix';

export default {
	name: 'BeeAffix',
	props: {},
	data() {
		return {
			slot: false,
		};
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
