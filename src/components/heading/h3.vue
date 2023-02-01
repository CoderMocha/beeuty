<template>
	<h3 :class="classes"><slot></slot></h3>
</template>

<script>
import { typographyMixin } from '../../mixins/typography.mixin';

const prefixCls = 'bee__h3';
export default {
	name: 'BeeH3',
	mixins: [typographyMixin],
	data() {
		return {
			prefixCls,
		};
	},
};
</script>
