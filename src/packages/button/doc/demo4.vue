<template>
  <div class="container">
    <t-button type="primary" disabled>主要按钮</t-button>
    <t-button type="success" disabled>成功按钮</t-button>
    <t-button type="warning" disabled>警告按钮</t-button>
    <t-button type="error" disabled>危险按钮</t-button>
    <t-button type="info" disabled>信息按钮</t-button>
    <t-button type="text" disabled>文本按钮</t-button>
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