/*
 * @Author: atdow
 * @Date: 2021-04-21 16:38:31
 * @LastEditors: null
 * @LastEditTime: 2021-04-23 16:37:13
 * @Description: file content
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

// import 'element-plus/lib/theme-chalk/index.css'

// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
createApp(App).use(router).use(store).mount('#app')
