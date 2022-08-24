import { createRouter,createMemoryHistory} from 'vue-router'
import routerPage from './routerPage/page'
const router = createRouter({
    history:createMemoryHistory(),
    routes:[...routerPage]
})
export default router