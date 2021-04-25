/*
 * @Author: atdow
 * @Date: 2021-04-21 16:38:31
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 10:49:09
 * @Description: file content
 */
import { createApp } from 'vue'
import { ElButton, ElSelect } from 'element-plus'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(ElButton)
app.use(ElSelect)

import 'element-plus/lib/theme-chalk/index.css'

app.use(router)
app.use(store)
app.mount('#app')
