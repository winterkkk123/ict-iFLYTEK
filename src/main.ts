import { createApp } from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'

// createApp(App).mount('#app')
// 创建vue实例
const app = createApp(App);
// 使用路由器
app.use(router);
// 挂载整个应用到app容器中
app.mount('#app');