/*
 * @Author: atdow
 * @Date: 2021-04-25 18:32:43
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 18:37:41
 * @Description: file content
 */

import request from '/@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}
