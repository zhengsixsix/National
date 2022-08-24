<template>
  <div class="container">
    <t-button type="primary" plain>主要按钮</t-button>
    <t-button type="success" plain>成功按钮</t-button>
    <t-button type="warning" plain>警告按钮</t-button>
    <t-button type="error" plain>危险按钮</t-button>
    <t-button type="info" plain>信息按钮</t-button>
    <t-button type="text" plain>文本按钮</t-button>
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