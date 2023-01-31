import BeeAlert from './components/alert';
import BeeAvatar from './components/avatar';
import BeeBadge from './components/badge';
import BeeButton from './components/button';
import BeeCard from './components/card';
import BeeCollapse from './components/collapse';
import BeeDivider from './components/divider';
import BeeDrawer from './components/drawer';
import BeeDropdown from './components/dropdown';
import BeeForm from './components/form';
import BeeInput from './components/input';
import BeePagination from './components/pagination';
import BeeIcon from './components/icon';
import BeeTabs from './components/tabs';
import BeeTag from './components/tag';
import BeeTooltip from './components/tooltip';
import BeeTree from './components/tree';
import BeeCol from './components/col';
import BeeRow from './components/row';
import BeeRadio from './components/radio';
import BeeSpace from './components/space';
import { BeeText, BeeHeading } from './components/typography';

const components = {
	BeeAlert,
	BeeAvatar,
	BeeBadge,
	BeeButton,
	BeeButtonGroup: BeeButton.Group,
	BeeCard,
	BeeCollapse,
	BeeCollapseItem: BeeCollapse.Item,
	BeeDivider,
	BeeDrawer,
	BeeDropdown,
	BeeDropdownMenu: BeeDropdown.Menu,
	BeeDropdownItem: BeeDropdown.Item,
	BeeForm,
	BeeFormItem: BeeForm.Item,
	BeeInput,
	BeePagination,
	BeeIcon,
	BeeTabs,
	BeeTag,
	BeeTooltip,
	BeeTree,
	BeeTabsPane: BeeTabs.Pane,
	BeeCol,
	BeeRow,
	BeeRadio,
	BeeRadioGroup: BeeRadio.Group,
	BeeSpace,
	BeeText,
	BeeHeading,
};

const install = function(Vue, opts = {}) {
	Object.keys(components).map((componentKey) => {
		Vue.component(components[componentKey].name, components[componentKey]);
	});

	Vue.prototype.$BEE = {
		size: opts.size || '',
	};
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
