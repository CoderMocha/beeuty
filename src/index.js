import BeeAvatar from './components/avatar';
import BeeBadge from './components/badge';
import BeeButton from './components/button';
import BeeCard from './components/card';
import BeeDivider from './components/divider';
import BeeIcon from './components/icon';
import BeeTag from './components/tag';
import BeeTabs from './components/tabs';
import BeeCol from './components/col';
import BeeRow from './components/row';
import BeeSpace from './components/space';

const components = {
	BeeAvatar,
	BeeBadge,
	BeeButton,
	BeeButtonGroup: BeeButton.Group,
	BeeCard,
	BeeDivider,
	BeeIcon,
	BeeTag,
	BeeTabs,
	BeeTabsPane: BeeTabs.Pane,
	BeeCol,
	BeeRow,
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
