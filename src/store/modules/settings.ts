/*
 * @Author: atdow
 * @Date: 2021-04-25 15:02:47
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 18:30:39
 * @Description: file content
 */

// import variables from '@/assets/styles/element-variables.scss' 暂时放弃这种方式
let variables = {
  theme: '#1890ff'
}

import { IDefaultSettings, defaultSettings } from '/@/settings'
import { Commit } from '_vuex@4.0.0@vuex'
interface ISate extends IDefaultSettings {
  theme: string
}

const { sideTheme, showSettings, topNav, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const storageSetting = JSON.parse(localStorage.getItem('layout-setting') || '{}') || {}
const state: ISate = {
  theme: storageSetting.theme || variables.theme,
  sideTheme: storageSetting.sideTheme || sideTheme,
  showSettings: showSettings,
  topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
  tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
  fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
  sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state: IDefaultSettings, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting(context: { commit: Commit }, data) {
    context.commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
