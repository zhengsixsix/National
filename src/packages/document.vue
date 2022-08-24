<template>
  <div class="container">
    <div class="left">
      <ul>
        <li
          v-for="(item, index) of menuList[0].children[1].children"
          :key="index"
          :class="{ active: activeIndex == index }"
          @click="swichMenu(item,index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>
    
<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'
import menuList from "@/router/routerPage/page.js";
const router = useRouter()
const activeIndex = ref(0);
const swichMenu = (item,index)=>{
    activeIndex.value = index
    router.push({name:item.name})
}
</script>
    
<style lang="less" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  .left {
    width: 360px;
    border-right: 1px solid #003460;
    ul {
        margin: 0;
      li {
        line-height: 40px;
        padding: 0 10px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .active {
        border-right: 4px solid #226b68;
        background-color: #a4c9cc;
      }
    }
  }
  .router-view {
    flex: 1;
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
</style>