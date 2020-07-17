/*
 * @Author: ymy
 * @Date: 2020-07-17 10:15:55
 * @LastEditors: ymy
 * @LastEditTime: 2020-07-17 10:34:44
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
