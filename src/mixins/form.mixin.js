import { findComponentUpward } from '../utils/assist';

export const formMixin = {
	methods: {
		dispatch(componentName, eventName, params) {
			const parent = findComponentUpward(this, componentName);
			if (parent) parent.$emit.apply(parent, [eventName].concat(params));
		},
	},
};
