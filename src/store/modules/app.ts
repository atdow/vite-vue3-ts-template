/*
 * @Author: atdow
 * @Date: 2021-04-25 15:02:47
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 15:57:48
 * @Description: file content
 */
import Cookies from 'js-cookie'
import { Commit } from '_vuex@4.0.0@vuex'

interface IState {
  sidebar: ISidebar
  device: String
  size: String
}
interface ISidebar {
  opened: Boolean
  withoutAnimation: Boolean
}

const state: IState = {
  sidebar: {
    // opened: Cookies.get('sidebarStatus') === 'true' ? !!+Cookies.get('sidebarStatus') : true,
    opened: Cookies.get('sidebarStatus') === 'true' ? false : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: (state: IState) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 'true')
    } else {
      Cookies.set('sidebarStatus', 'false')
    }
  },
  CLOSE_SIDEBAR: (state: IState, withoutAnimation: Boolean) => {
    Cookies.set('sidebarStatus', 'false')
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state: IState, device: String) => {
    state.device = device
  },
  SET_SIZE: (state: IState, size: String) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  // toggleSideBar(commit:{ commit:Commit }) {
  //   commit('TOGGLE_SIDEBAR')
  // },
  toggleSideBar(context: { commit: Commit }) {
    context.commit('TOGGLE_SIDEBAR')
  },
  // closeSideBar({ commit }, { withoutAnimation }) {
  //   commit('CLOSE_SIDEBAR', withoutAnimation)
  // },
  closeSideBar(context: { commit: Commit }, withoutAnimation: Boolean) {
    context.commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice(context: { commit: Commit }, device: String) {
    context.commit('TOGGLE_DEVICE', device)
  },
  setSize(context: { commit: Commit }, size: String) {
    context.commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
