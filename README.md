# anyrtc-bpm
## 结构
```
src
├─App.vue
├─main.js     入口文件
├─views
|   ├─403.vue
|   ├─404.vue
|   ├─Home.vue
|   ├─Login.vue
|   ├─userRoleManger
|   |       └index.vue
|   ├─user        #用户管理相关的页面
|   |  ├─AllUser.vue    #所有用户
|   |  ├─ArrearageUser.vue   #欠费用户
|   |  ├─LoginUser.vue    #最新登录的用户
|   |  ├─PayUser.vue       #付费用户
|   |  ├─RegisterUser.vue    #最近注册的用户
|   |  └SerchUser.vue       #搜索用户
|   ├─servicePackManager    #服务打包相关
|   |         └index.vue
|   ├─serviceOperation    #服务运维相关
|   |        └index.vue
|   ├─operationStatistics    #营运统计相关
|   |          └index.vue
|   ├─issueManager    #提问题相关管理
|   |      └index.vue
|   ├─finance           #财务相关管理
|   |    └index.vue
|   ├─emailManager     #email相关管理
|   |      └index.vue
├─store
|   └index.js
├─router     #路由配置，菜单配置从路由中获取。
|   └index.js
├─components     #最外层组件或公共组件
|     ├─HomeHeader.vue
|     └logoData.js
├─assets
|   ├─logo.png
|   ├─css
|   |  ├─custom.scss
|   |  ├─index.scss
|   |  └them.scss
├─api  #封装api
|  ├─ajax.js   #封装axios
|  └index.js   #管理所有的请求url和基础url
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
