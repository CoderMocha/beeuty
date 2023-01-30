import BeeAvatar from './components/avatar';
import BeeBadge from './components/badge';
import BeeButton from './components/button';
import BeeCard from './components/card';
import BeeDivider from './components/divider';
import BeeForm from './components/form';
import BeeInput from './components/input';
import BeeIcon from './components/icon';
import BeeTabs from './components/tabs';
import BeeTag from './components/tag';
import BeeTooltip from './components/tooltip';
import BeeCol from './components/col';
import BeeRow from './components/row';
import BeeRadio from './components/radio';
import BeeSpace from './components/space';

const components = {
	BeeAvatar,
	BeeBadge,
	BeeButton,
	BeeButtonGroup: BeeButton.Group,
	BeeCard,
	BeeDivider,
	BeeForm,
	BeeFormItem: BeeForm.Item,
	BeeInput,
	BeeIcon,
	BeeTabs,
	BeeTag,
	BeeTooltip,
	BeeTabsPane: BeeTabs.Pane,
	BeeCol,
	BeeRow,
	BeeRadio,
	BeeRadioGroup: BeeRadio.Group,
	BeeSpace,
};

const install = function(Vue, opts = {}) {
	Object.keys(components).map((componentKey) => {
		Vue.component(components[componentKey].name, components[componentKey]);
	});
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	...components,
	// ...如果还有的话继续添加
};
