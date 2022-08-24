<template>
  <div class="pre-code-box">
    <span class="m-copy" v-if="showCode"><i class="m-icon-copy"></i></span>
    <transition name="slide-fade">
      <pre
        class="language-html"
        v-if="showCode"
        v-highlight
      ><code class="language-html">{{sourceCode}}</code></pre>
    </transition>
    <div class="showCode" @click="showOrhidecode">
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
    </div>
    <textarea name="" id="inputCopy" cols="30" rows="10"></textarea>
  </div>
</template>
    
<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  compname: {
    type: String,
    default: "",
    require: true,
  },
  demoname: { 
    type: String,
    default: "",
    require: true,
  },
});
const showCode = ref(false);
const border = ref("1px solid rgba(0,0,0,.06)");
const showOrhidecode = () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = "0";
  } else {
    border.value = "1px solid rgba(0,0,0,.06)";
  }
};
const sourceCode = ref("");
async function getSourceCode() {
  const isDev = import.meta.env.MODE === "development";
  if (isDev) {
    sourceCode.value = (
      await import(
        /* @vite-ignore */ `/src/packages/${props.compname}/doc/${props.demoname}.vue?raw`
      )
    ).default;
  } else {
    sourceCode.value = await fetch(
      `/src/packages/${props.compname}/doc/${props.demoname}.vue`
    ).then((res) => {
      res.text();
    });
  }
}
onMounted(() => {
  getSourceCode();
});
</script>
    
<style lang="less" scoped>
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -999999;
}
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box {
  width: 100%;
  overflow: hidden;
  border-top: 0;
  margin: 0 0 15px 0;
  position: relative;
  transition: all 0.15s ease-out;
  margin-top: 10px;
  .m-copy {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    i {
      font-size: 22px;
      color: #b7b3b3;
      &hover {
        color: #000;
      }
    }
  }
  .showCode {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    background: #f9f9f9;
    box-shadow: 0 16px 15px -16px rgb(0 0 0 / 10%);
    color: #505050;
    cursor: pointer;
    i {
      margin-left: 10px;
    }
    i.rotate {
      transform: rotate(180deg);
    }
    &:hover {
      background: #f2f3f5;
      color: #0e80eb;
    }
  }
}
</style>