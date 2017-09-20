import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_production.js')
// console.log(process.env.NODE_ENV)
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', name: '登录', noHidden: true, component: _import('login/Login'), children: [] },
  { path: '/404', name: '404', noHidden: true, component: _import('404'), children: [] },
  {
    path: '/',
    name: '主页',
    icon: 'el-icon-menu',
    noHidden: true,
    noDropdown: true,
    component: Layout,
    redirect: '/dashboard',
    children: [{ path: 'dashboard', component: _import('dashboard/Dashboard') }]
  },
  {
    path: '/list',
    name: '文章管理',
    icon: 'el-icon-document',
    noHidden: true,
    noDropdown: false,
    component: Layout,
    redirect: 'noredirect',
    children: [
      { path: 'index', name: '文章列表', noHidden: true, noDropdown: false, component: _import('articles/list') }
    ]
  },
  { path: '*', noHidden: true, name: '页面未找到', redirect: '/404', children: [] }
]

export default new Router({
  routes: constantRouterMap
})

// 多级列表的例子
// 其中二级的组件不需要加载样式，所以引入一个
// <template>
// <router-view></router-view>
// </template>
// {
//   path: '/list',
//     name: '文章管理',
//   icon: 'el-icon-document',
//   noHidden: true,
//   noDropdown: false,
//   component: Layout,
//   redirect: 'noredirect',
//   children: [
//   {
//     path: '/list/index',
//     name: '多级列表例子',
//     noHidden: true,
//     noDropdown: false,
//     redirect: '/list/index/dashboard',
//     component: _import('articles/index'),
//     children: [{ path: 'dashboard', name: 'i am three', noHidden: true, noDropdown: true, component: _import('dashboard/Dashboard') }]
//   }
// ]
// },
