<template>
  <div class="home">
    <div class="logo">
      <img src="../assets/l.png" alt=""/>
    </div>
    <div class="introduce">
      <p>一套适合开发者使用的轻量级国风UI组件库， 完美支持Vue3</p>
      <p class="small">
        完美支持vite+vue3版本，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的vue世界
      </p>
    </div>
    <div class="goComponent">
      <t-button @click="goDocument">立即上手</t-button>
      <t-button type="success">Gitee</t-button>
    </div>
  </div>
</template>
  
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
function goDocument() {
  router.push({ name: "document" });
}

</script>
    
<style lang="less" scoped>
.home {
  width: 100%;
  .logo {
    width: 200px;
    margin: 20px auto;
    img {
      width: 100%;
    }
  }
  .introduce {
    text-align: center;
    font-size: 30px;
    color: #819d8e;
    p {
      margin-bottom: 15px;
    }
    .small {
      font-size: 15px;
      color: #a88787;
    }
  }
  .goComponent {
    width: 250px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    /deep/ .t-button {
      button {
        border-radius: 30px;
      }
    }
    /deep/.t-button-success{
        button{
            padding: 13px 37px;
        }
    }
  }
}
</style>