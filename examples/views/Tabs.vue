<template>
  <div>
    <bee-h2>Tabs</bee-h2>
    <bee-row :gutter="16">
      <bee-col :span="12">
        <bee-card title="Basic">
          <bee-tabs>
            <bee-tabs-pane label="用户管理" name="user">user</bee-tabs-pane>
            <bee-tabs-pane label="配置管理" name="config">config</bee-tabs-pane>
            <bee-tabs-pane label="角色管理" name="role">role</bee-tabs-pane>
          </bee-tabs>
        </bee-card>
      </bee-col>
    </bee-row>
  </div>
</template>

<script>

export default {
  name: "Tabs",
}
</script>

<style lang="scss" scoped>

</style>
