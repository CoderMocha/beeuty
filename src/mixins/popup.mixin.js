import { flattenDeep } from 'lodash';

const placementArray = flattenDeep(
	['top', 'left', 'right', 'bottom'].map((pos) => {
		return [pos, `${pos}-start`, 'pos-end'];
	}),
);

export const popMixin = {
	props: {
		placement: {
			validate(value) {
				return placementArray.includes(value);
			},
			default: 'top',
		},
	},
	data() {
		return {
			visible: false,
		};
	},
};
