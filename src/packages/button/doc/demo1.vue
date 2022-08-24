<template>
  <div class="container">
    <t-button>默认按钮</t-button>
    <t-button type="primary">主要按钮</t-button>
    <t-button type="success">成功按钮</t-button>
    <t-button type="warning">警告按钮</t-button>
    <t-button type="error">危险按钮</t-button>
    <t-button type="info">信息按钮</t-button>
    <t-button type="text">文本按钮</t-button>
  </div>
</template>
    
<script setup>
</script>

<style lang="less" scoped>
.container{
  display: flex;
  justify-content: space-around;
}
</style>