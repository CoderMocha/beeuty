export const typographyMixin = {
	props: {
		type: {
			validate(value) {
				return ['default', 'success', 'info', 'warning', 'error'].includes(value);
			},
			default: 'default',
		},
	},
	computed: {
		classes() {
			return [
				this.prefixCls,
				{
					[`bee__text-color-${this.type}`]: !!this.type,
				},
			];
		},
	},
};
