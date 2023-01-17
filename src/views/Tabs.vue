<template>
  <div>
    <h2>Tabs</h2>
    <div>
      <h3>Size</h3>
      <bee-tabs>
        <bee-tabs-pane label="用户管理" name="user"></bee-tabs-pane>
        <bee-tabs-pane label="配置管理" name="config"></bee-tabs-pane>
        <bee-tabs-pane label="角色管理" name="role"></bee-tabs-pane>
      </bee-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: "Tabs",
}
</script>

<style lang="scss" scoped>

</style>
