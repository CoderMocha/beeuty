export const basicProps = {
	props: {
		// 尺寸
		size: {
			validate(value) {
				return ['tiny', 'small', 'medium', 'large'].includes(value);
			},
			default() {
				return !this.$BEE.size || this.$BEE.size === '' ? 'medium' : this.$BEE.size;
			},
		},
		// 类型
		type: {
			type: String,
			default: 'normal',
		},
	},
};
