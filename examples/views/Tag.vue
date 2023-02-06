<template>
  <div>
    <h2>Tag</h2>
    <div>
      <h3>Size</h3>
      <bee-tag size="tiny">小小</bee-tag>
      <bee-tag size="small">小</bee-tag>
      <bee-tag>正常</bee-tag>
      <bee-tag size="large">大</bee-tag>
    </div>
    <div>
      <h3>Type</h3>
      <bee-tag type="primary">主要</bee-tag>
      <bee-tag type="info">信息</bee-tag>
      <bee-tag type="success">成功</bee-tag>
      <bee-tag type="warning">警告</bee-tag>
      <bee-tag type="error">错误</bee-tag>
    </div>
    <div>
      <h3>Closeable</h3>
      <bee-tag closeable>可关闭</bee-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tag"
}
</script>

<style lang="scss" scoped>

</style>
