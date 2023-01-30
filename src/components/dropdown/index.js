import BeeDropdown from './dropdown.vue';
import BeeDropdownMenu from './dropdown-menu.vue';
import BeeDropdownItem from './dropdown-item.vue';
BeeDropdown.Menu = BeeDropdownMenu;
BeeDropdown.Item = BeeDropdownItem;

BeeDropdown.install = (Vue) => {
	Vue.component(BeeDropdown.name, BeeDropdown);
};

export default BeeDropdown;
