import BeeTabs from "./tabs.vue";
import BeeTabsPane from "./tabs-pane.vue";

BeeTabs.Pane = BeeTabsPane;

BeeTabs.install = Vue => {
  Vue.component(BeeTabs.name, BeeTabs);
}

export default BeeTabs;
