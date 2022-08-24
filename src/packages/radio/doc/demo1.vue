<template>
  <div class="container">
    <t-radio :opctions="options" v-model="check" @change="change"></t-radio>
  </div>
</template>

    
<script setup lang='ts'>
import { reactive, ref } from "vue";
const check = ref("1");
const state = reactive({
  options: [
    {
      value: "1",
      label: "中国",
    },
    {
      value: "2",
      label: "日本",
      disabled: true,
    },
    {
      value: "3",
      label: "美国",
    },
    {
      value: "4",
      label: "英国",
    },
    {
      value: "5",
      label: "韩国",
    },
  ],
});
const { options } = state;
const change = (e) => {
  console.log(e);
};
</script>
    
<style>
</style>
