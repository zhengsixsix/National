<template>
  <div class="container">
    <t-select :options="options" v-model="Sleval"></t-select>
  </div>
</template>
    
<script setup>
import { reactive, ref } from "vue";
const Sleval = ref("1");
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
</script>
    
<style>
</style>