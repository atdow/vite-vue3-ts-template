/*
 * @Author: atdow
 * @Date: 2021-04-25 17:25:36
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 18:31:34
 * @Description: file content
 */
export interface IDefaultSettings {
  title?: String
  sideTheme: String
  showSettings: Boolean
  topNav: Boolean
  tagsView: Boolean
  fixedHeader: Boolean
  sidebarLogo: Boolean
  errorLog?: Boolean
}
export const defaultSettings = {
  // module.exports = {
  title: 'template',

  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   */
  sideTheme: 'theme-dark',

  /**
   * 是否系统布局配置
   */
  showSettings: false,

  /**
   * 是否显示顶部导航
   */
  topNav: false,

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
   * 是否固定头部
   */
  fixedHeader: false,

  /**
   * 是否显示logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
