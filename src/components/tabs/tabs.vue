<template>
<div :class="classes">
  <div ref="TabsHeader" :class="headerClasses" :style="headerStyles">
    <div v-for="tab in tabsArray"
         :class="[`${headerClasses}-item`, {'active': tab.name === activeName}]"
         @click="handleTabClick(tab)">{{ tab.label }}</div>
  </div>
  <div :class="contentClasses"><slot></slot></div>
</div>
</template>

<script>
const prefixCls = 'bee__tabs';
export default {
  name: "BeeTabs",
  props: {
    activeColor: {
      type: String,
      default: '#FF7D0F',
    }
  },
  data() {
    return {
      tabsArray: [],
      activeName: '',
      activeWidth: 0,
      activeLeft: 0,
    }
  },
  computed: {
    classes() {
      return [prefixCls];
    },
    headerClasses() {
      const cls = `${prefixCls}-header`;
      return [cls];
    },
    headerStyles() {
      return {
        '--active-color': this.activeColor,
        '--active-width': `${this.activeWidth}px`,
        '--active-left': `${this.activeLeft}px`,
      }
    },
    contentClasses() {
      const cls = `${prefixCls}-content`;
      return [cls];
    },
  },
  mounted() {
    this.tabsArray = this.$children;
    this.updateTab();
  },
  methods: {
    handleTabClick(tab) {
      this.activeName = tab.name;
      this.updateTab();
      this.$emit("change", tab);
    },
    updateTab() {
      if(this.activeName === '') {
        this.activeName = this.$children[0].name;
      }
      this.$children.forEach((ele) => {
        ele.currentShow = ele.name === this.activeName;
      });
      this.$nextTick(() => {
        const activeEl = this.$refs.TabsHeader.querySelector('.active');
        this.activeWidth = activeEl.offsetWidth;
        this.activeLeft = activeEl.offsetLeft;

      });
    }
  },
}
</script>
