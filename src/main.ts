import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import Room from './components/Room.vue'
import RoomList from './components/RoomList.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const routes = [
  { path: '/room/:id', component: Room },
  { path: '/', component: RoomList },
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
