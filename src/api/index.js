/*
 * @Author: ymy
 * @Date: 2020-07-17 10:25:02
 * @LastEditors: ymy
 * @LastEditTime: 2020-07-17 10:27:36
 */

import ajax from './ajax'
const BaseUrl = '基础路由'
export const pwdLogin = data => ajax(BaseUrl + '/uaa/oauth/token', data, 'POST', 'form')
