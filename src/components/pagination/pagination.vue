<template>
	<div :class="classes">
		<div :class="[`${prefixCls}-item`, 'prev']"></div>
		<div :class="[`${prefixCls}-item`]"></div>
		<div :class="[`${prefixCls}-item`, 'next']"></div>
	</div>
</template>

<script>
const prefixCls = 'bee__pagination';
export default {
	name: 'BeePagination',
	props: {
		total: Number,
		pageCount: Number,
		pageSize: {
			type: Number,
			default: 10,
		},
		currentPage: {
			type: Number,
			default: 1,
		},
	},
	data() {
		return { prefixCls };
	},
	computed: {
		classes() {
			return [prefixCls];
		},
	},
};
</script>
