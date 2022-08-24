import { createApp } from 'vue'
import App from './App.vue'
import national from 'nationalstyle-ui'
import router from '@/router'
import "../node_modules/nationalstyle-ui/dist/style.css"
import hljs from 'highlight.js'
import "highlight.js/styles/color-brewer.css"
const app = createApp(App)
app.use(national)
app.use(router)
app.mount('#app')
app.directive('highlight',function(el){
    hljs.highlightBlock(el)
    // const blocks = el.querSelectorAll("pre code")
    // blocks.forEach(item => {
    //     hljs.highlightBlock(item)
    // });
})
