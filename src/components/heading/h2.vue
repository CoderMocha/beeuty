<template>
	<h2 :class="classes"><slot></slot></h2>
</template>

<script>
import { typographyMixin } from '../../mixins/typography.mixin';

const prefixCls = 'bee__h2';
export default {
	name: 'BeeH2',
	mixins: [typographyMixin],
	data() {
		return {
			prefixCls,
		};
	},
};
</script>
