import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Markdown from 'vite-plugin-md'
const pathResolve = (dir) => {  
  return resolve(__dirname, ".", dir)          
}
const alias = {
  '@': pathResolve("src")
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({include:[/\.md$/,/\.vue$/]}),Markdown()],
  resolve: {// 配置@路径
    alias
  }
})
