<template>
<div class="bee__tabs"></div>
</template>

<script>
export default {
  name: "BeeTabs",
  data() {
    return {
      tabsArray: [],
    }
  },
  mounted() {
    console.log(this.$children);
    this.tabsArray = this.$children;
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>
