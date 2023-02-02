import BeeBreadcrumb from './breadcrumb.vue';
import BeeBreadcrumbItem from './breadcrumb-item.vue';
BeeBreadcrumb.Item = BeeBreadcrumbItem;

BeeBreadcrumb.install = (Vue) => {
	Vue.component(BeeBreadcrumb.name, BeeBreadcrumb);
};

export default BeeBreadcrumb;
