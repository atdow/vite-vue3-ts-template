/*
 * @Author: atdow
 * @Date: 2021-04-21 18:11:16
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 17:14:20
 * @Description: file content
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
