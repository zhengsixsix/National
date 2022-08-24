<template>
  <div class="container">
     <t-button round>默认按钮</t-button>
    <t-button type="primary" round>主要按钮</t-button>
    <t-button type="success" round>成功按钮</t-button>
    <t-button type="warning" round>警告按钮</t-button>
    <t-button type="error" round>危险按钮</t-button>
    <t-button type="info" round>信息按钮</t-button>
    <t-button type="text" round>文本按钮</t-button>
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