import BeeMenu from './Menu.vue';
import BeeSubmenu from './submenu.vue';
import BeeMenuItem from './Menu-item.vue';
import BeeMenuGroup from './Menu-group.vue';

BeeMenu.Submenu = BeeSubmenu;
BeeMenu.Item = BeeMenuItem;
BeeMenu.Group = BeeMenuGroup;

BeeMenu.install = (Vue) => {
	Vue.component(BeeMenu.name, BeeMenu);
};

export default BeeMenu;
