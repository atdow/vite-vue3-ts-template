/*
 * @Author: atdow
 * @Date: 2021-04-25 14:53:57
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 14:58:53
 * @Description: file content
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: String) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
