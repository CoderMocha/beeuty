import BeeAlert from './components/alert';
import BeeAvatar from './components/avatar';
import BeeBadge from './components/badge';
import BeeBreadcrumb from './components/breadcrumb';
import BeeButton from './components/button';
import BeeCard from './components/card';
import BeeCollapse from './components/collapse';
import BeeCount from './components/count';
import BeeDivider from './components/divider';
import BeeDrawer from './components/drawer';
import BeeDropdown from './components/dropdown';
import BeeEmpty from './components/empty';
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
import BeePopover from './components/popover';
import BeeLayout from './components/layout';
import BeeMenu from './components/menu';
import BeeTimeline from './components/timeline';
import { BeeText, BeeH1, BeeH2, BeeH3 } from './components/typography';

const components = {
	BeeAlert,
	BeeAvatar,
	BeeBadge,
	BeeBreadcrumb,
	BeeBreadcrumbItem: BeeBreadcrumb.Item,
	BeeButton,
	BeeButtonGroup: BeeButton.Group,
	BeeCard,
	BeeCollapse,
	BeeCount,
	BeeCollapsePane: BeeCollapse.Pane,
	BeeDivider,
	BeeDrawer,
	BeeDropdown,
	BeeDropdownMenu: BeeDropdown.Menu,
	BeeDropdownItem: BeeDropdown.Item,
  BeeEmpty,
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
	BeePopover,
	BeeText,
	BeeH1,
	BeeH2,
	BeeH3,
	BeeMenu,
	BeeSubmenu: BeeMenu.Submenu,
	BeeMenuItem: BeeMenu.Item,
	BeeMenuGroup: BeeMenu.Group,
	BeeLayout,
	BeeHeader: BeeLayout.Header,
	BeeFooter: BeeLayout.Footer,
	BeeContent: BeeLayout.Content,
	BeeAside: BeeLayout.Aside,
	BeeTimeline,
	BeeTimelineItem: BeeTimeline.Item,
};

const install = function(Vue, opts = {}) {
	Object.keys(components).map((componentKey) => {
		Vue.component(components[componentKey].name, components[componentKey]);
	});

	Vue.prototype.$BEE = {
		size: opts.size || '',
	};
};

/* ????????????????????????????????? */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	...components,
	// ...??????????????????????????????
};
