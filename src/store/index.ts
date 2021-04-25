/*
 * @Author: atdow
 * @Date: 2021-04-21 16:49:05
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 15:17:19
 * @Description: file content
 */
// import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'

// Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    tagsView,
    permission,
    settings
  },
  getters
})

export default store
