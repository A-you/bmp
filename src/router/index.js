/*
 * @Author: ymy
 * @Date: 2020-07-16 16:32:20
 * @LastEditors: ymy
 * @LastEditTime: 2020-07-17 14:12:56
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/** 用户管理start */
import AllUser from '../views/user/AllUser.vue'
import Arrearage from '../views/user/ArrearageUser.vue'
import LoginUser from '../views/user/LoginUser.vue'
import PayUser from '../views/user/PayUser.vue'
import RegisterUser from '../views/user/RegisterUser.vue'
import SerchUser from '../views/user/SerchUser.vue'

/** 财务管理 */
import FinanceIndex from '../views/finance/index.vue'

/** 查找问题 */
import IssueIndex from '../views/issueManager/index.vue'

/** 服务运维 */
import ServiceIndex from '../views/serviceOperation/index.vue'

/**  运营统计 */
import OperationIndex from '../views/operationStatistics/index.vue'

/** 角色管理 */
import UserReloIndex from '../views/userRoleManger'

/** 邮件管理 */
import emailManager from '../views/emailManager'

/** 服务打包 */
import ServicePack from '../views/servicePackManager'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user/index',
    hidden: true
  },
  {
    path: '/login',
    name: '',
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: Home,
    meta: {
      title: '用户管理',
      icon: 'el-icon-user',
      authority: ['user'] /** 权限 限制 */
    },
    single: false, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'AllUser',
        meta: {
          title: '所有用户',
          authority: ['user', 'admin'] /** 权限 限制 */
        },
        component: AllUser
      },
      {
        path: 'serch',
        name: 'SerchUser',
        meta: {
          title: '搜索用户'
        },
        component: SerchUser
      },
      {
        path: 'arrearage',
        name: 'Arrearage',
        meta: {
          title: '欠费用户'
        },
        component: Arrearage
      },
      {
        path: 'pay',
        name: 'PayUser',
        meta: {
          title: '付费用户'
        },
        component: PayUser
      },
      {
        path: 'login',
        name: 'LoginUser',
        meta: {
          title: '最近登录的用户'
        },
        component: LoginUser
      },
      {
        path: 'register',
        name: 'RegisterUser',
        meta: {
          title: '最新注册的用户'
        },
        component: RegisterUser
      }
    ]
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Home,
    meta: {
      title: '财务管理',
      icon: 'el-icon-user',
      authority: ['user'] /** 权限 限制 */
    },
    single: true, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'FinanceIndex',
        meta: {
          title: '财务管理首页'
        },
        component: FinanceIndex
      }
    ]
  },
  {
    path: '/issue',
    name: 'Issue',
    component: Home,
    meta: {
      title: '查找问题',
      icon: 'el-icon-user'
    },
    single: true, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'IssueIndex',
        meta: {
          title: '查找问题首页'
        },
        component: IssueIndex
      }
    ]
  },
  {
    path: '/sevice',
    name: 'Sevice',
    component: Home,
    meta: {
      title: '服务运维',
      icon: 'el-icon-user'
    },
    single: true, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'ServiceIndex',
        meta: {
          title: '服务运维首页'
        },
        component: ServiceIndex
      }
    ]
  },
  {
    path: '/oeration',
    name: 'Oeration',
    component: Home,
    meta: {
      title: '运营统计',
      icon: 'el-icon-user'
    },
    single: true, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'OperationIndex',
        meta: {
          title: '运营统计首页'
        },
        component: OperationIndex
      }
    ]
  },
  {
    path: '/role',
    name: 'UserRole',
    component: Home,
    meta: {
      title: '用户角色管理',
      icon: 'el-icon-user'
    },
    single: true, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'UserReloIndex',
        meta: {
          title: '角色管理首页'
        },
        component: UserReloIndex
      }
    ]
  },
  {
    path: '/email',
    name: 'email',
    component: Home,
    meta: {
      title: '邮件管理',
      icon: 'el-icon-message'
    },
    single: true, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'emailManager',
        meta: {
          title: '邮件管理首页'
        },
        component: emailManager
      }
    ]
  },
  {
    path: '/pack/service',
    name: 'PackService',
    component: Home,
    meta: {
      title: '服务打包管理',
      icon: 'el-icon-folder'
    },
    single: true, /** 标识是否为单个 */
    hidden: false, /** 标识在菜单栏显示 */
    children: [
      {
        path: 'index',
        name: 'ServicePack',
        meta: {
          title: '服务打包首页'
        },
        component: ServicePack
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router
