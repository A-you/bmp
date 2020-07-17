/*
 * @Author: ymy
 * @Date: 2020-07-17 10:24:21
 * @LastEditors: ymy
 * @LastEditTime: 2020-07-17 10:28:44
 */

import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token// 授权（每次请求把sessionId带给后台）
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 相应拦截器
axios.interceptors.response.use(res => {
  return res
}, error => {
  // 对响应错误做处理
  console.log('错误响应', error.response)
  if (error.response.status === 401) {
    Message.error('身份已过期，请重新登录')
    localStorage.removeItem('token')
    router.push('/login')
    return false
  }
  return Promise.reject(error)
})

/**
 * @description:
 * @param {type}: params_ty值为form或json，默认为json
 * @return:
 */
export default function ajax (url = '', params = {}, type = 'GET', params_type = 'json') {
  // let loadingInstance = Loading.service({
  //   text:"正在努力加载",
  //   background: "#565656"
  // });
  /***
   * params_type表示请求体的形式，form和json两种
   */
  let promise
  // 1. 返回promise对象
  return new Promise((resolve, reject) => {
    // 1.1 判断请求的方式
    if (type === 'GET') {
      // 1.2 拼接字符串
      let paramsStr = ''
      Object.keys(params).forEach(key => {
        paramsStr += key + '=' + params[key] + '&'
      })
      // 1.3 过滤最后的&
      if (paramsStr !== '') {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
      }
      // 1.4 拼接完整路径
      url += '?' + paramsStr
      // 1.5 发起get请求
      promise = axios.get(url)
    } else if (type === 'POST') {
      // 1.6 发起post请求
      // console.log("请求参数",params)
      if (params_type === 'json') {
        promise = axios.post(url, params)
      }
      if (params_type === 'form') {
        promise = axios({
          url: url,
          method: 'post',
          data: params,
          transformRequest: [function (data) {
            let ret = ''
            for (const it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
      }
    }
    // 1.7 返回结果
    promise.then((response) => {
      // console.log("返回then",response)
      // loadingInstance.close()
      resolve(response.data)
    }).catch(error => {
      // loadingInstance.close()
      console.log('返回error', error)
      reject(error)
    })
  })
}
