<template>
<div>
  <h2>Button</h2>
  <bee-row :gutter="16">
    <bee-col :span="12">
      <bee-card title="Size">
        <bee-space>
          <bee-button size="tiny">小小</bee-button>
          <bee-button size="small">小</bee-button>
          <bee-button>常规</bee-button>
          <bee-button size="large">大</bee-button>
        </bee-space>
      </bee-card>
      <bee-card title="Plain">
        <bee-button type="primary" plain>朴素</bee-button>
        <bee-button type="info" plain>朴素</bee-button>
        <bee-button type="success" plain>朴素</bee-button>
        <bee-button type="warning" plain>朴素</bee-button>
        <bee-button type="danger" plain>朴素</bee-button>
      </bee-card>
      <bee-card title="Round">
        <bee-button type="primary" size="tiny" round>圆角</bee-button>
        <bee-button type="info" round>圆角</bee-button>
      </bee-card>
      <bee-card title="Loading">
        <bee-button type="primary" loading>加载</bee-button>
        <bee-button type="primary" :loading="loading"
                    @click="handleLoading">加载</bee-button>
      </bee-card>
    </bee-col>
    <bee-col :span="12">
      <bee-card title="Type">
        <bee-button type="primary">主要</bee-button>
        <bee-button type="info">信息</bee-button>
        <bee-button type="success">成功</bee-button>
        <bee-button type="warning">警告</bee-button>
        <bee-button type="error">错误</bee-button>
      </bee-card>
      <bee-card title="Dashed">
        <bee-button type="primary" dashed>虚线</bee-button>
        <bee-button type="info" dashed>虚线</bee-button>
        <bee-button type="success" dashed>虚线</bee-button>
        <bee-button type="warning" dashed>虚线</bee-button>
        <bee-button type="danger" dashed>虚线</bee-button>
      </bee-card>
      <bee-card title="Disabled">
        <bee-button type="info" disabled>禁用</bee-button>
      </bee-card>
      <bee-card title="Group">
        <bee-button-group type="primary" ghost>
          <bee-button>圆角</bee-button>
          <bee-button>圆角</bee-button>
          <bee-button>圆角</bee-button>
        </bee-button-group>
        <bee-button-group type="primary" round>
          <bee-button>圆角</bee-button>
          <bee-button>圆角</bee-button>
          <bee-button>圆角</bee-button>
        </bee-button-group>
      </bee-card>
    </bee-col>
  </bee-row>
</div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    handleLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
