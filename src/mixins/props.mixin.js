export const basicProps = {
	props: {
		// 尺寸
		size: {
			validate(value) {
				return ['tiny', 'small', 'medium', 'large'].includes(value);
			},
			default: 'medium',
		},
		// 类型
		type: {
			type: String,
			default: 'normal',
		},
	},
};
