/*
 * @Author: atdow
 * @Date: 2021-04-21 16:38:31
 * @LastEditors: null
 * @LastEditTime: 2021-04-21 16:51:05
 * @Description: file content
 */
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
