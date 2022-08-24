<template>
  <div class="index">
    <header>
      <div class="header">
        <div class="left">
          <img src="../assets/l.png" alt="" @click="goHome"/>
          <span>National UI</span>
        </div>
        <div class="right">
          <ul>
            <li v-for="(item, index) of HomeDir" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
    
<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'
const router = useRouter()
const HomeDir = ref(["首页", "组件", "更新日志", "问题反馈"]);
const goHome = ()=>{
  router.push({ name: "home" });
}
</script>
    
<style lang="less" scoped>
.index {
  header {
    width: 100vw;
    height: 50px;
    border-bottom: 1px solid #ccc;
    .header {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      .left {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          height: 50px;
        }
        span {
          margin-left: 10px;
          font-weight: bold;
        }
      }
      .right {
        ul {
          display: flex;
          list-style-type: none;
          justify-content: space-between;
          padding: 0;
          width: 250px;
        }
      }
    }
  }
}
</style>