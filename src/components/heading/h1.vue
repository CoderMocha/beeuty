<template>
	<h1 :class="classes"><slot></slot></h1>
</template>

<script>
import { typographyMixin } from '../../mixins/typography.mixin';

const prefixCls = 'bee__h1';
export default {
	name: 'BeeH1',
	mixins: [typographyMixin],
	data() {
		return {
			prefixCls,
		};
	},
};
</script>
