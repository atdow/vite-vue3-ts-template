/*
 * @Author: atdow
 * @Date: 2021-04-26 15:52:16
 * @LastEditors: null
 * @LastEditTime: 2021-04-26 15:52:17
 * @Description: file content
 */
import * as axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
