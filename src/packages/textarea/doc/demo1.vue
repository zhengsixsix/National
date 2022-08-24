<template>
  <t-textarea v-model="textval" maxlength="20"></t-textarea>
</template>
    
<script setup lang='ts'>
import { ref } from "vue";
const textval = ref("");
</script>
    
<style>
</style>