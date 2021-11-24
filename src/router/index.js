import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/New-cart'
  },
  {
    path: '/Home',
    name: ' Home',
    component: resolve => require(['@/views/Home'], resolve),
    meta: {
      title:'首页'
    },
   
  },
  {
    path: '/Detail',
    name: ' Detail',
    component: resolve => require(['@/views/Detail'], resolve),
    meta: {
      title: '活动列表'
    },
  },
  {
    path: '/Nearby-stores',
    name: ' Nearby-stores',
    component: resolve => require(['@/views/Nearby-stores'], resolve),
    meta: {
      title: '附近门店'
    },
  },
  {
    path: '/My-information',
    name: ' My-information',
    component: resolve => require(['@/views/My-information'], resolve),
    meta: {
      title: '我的'
    },
  },
  {
    path: '/My-copy',
    name: ' My-copy',
    component: resolve => require(['@/views/My-copy'], resolve),
    meta: {
      title: '我的copy'
    },
  },
  {
    path: '/KIC',
    name: ' KIC',
    component: resolve => require(['@/views/KIC'], resolve),
    meta: {
      title: '活动列表'
    },
  },
  {
    path: '/Activities',
    name: ' Activities',
    component: resolve => require(['@/views/Activities'], resolve),
    meta: {
      title: '活动列表'
    },
  },
  {
    path: '/No-activity',
    name: ' No-activity',
    component: resolve => require(['@/views/No-activity'], resolve),
    meta: {
      title: '暂无活动'
    },
  },
  {
    path: '/Spell-group',
    name: ' Spell-group',
    component: resolve => require(['@/views/Spell-group'], resolve),
    meta: {
      title: '拼团'
    },
  },
  {
    path: '/Question-answer',
    name: ' Question-answer',
    component: resolve => require(['@/views/Question-answer'], resolve),
    meta: {
      title: '问答'
    },
  },
  {
    path: '/List-Problem',
    name: ' List-Problem',
    component: resolve => require(['@/views/List-Problem'], resolve),
    meta: {
      title: '问答列表'
    },
  },
  {
    path: '/add',
    name: 'add',
    component: resolve => require(['@/views/js/add'], resolve),
    meta: {
      title: '添加'
    },
  },
  {
    path: '/Shopping-cart',
    name: 'Shopping-cart',
    component: resolve => require(['@/views/Shopping-cart'], resolve),
    meta: {
      title: '购物车'
    },
  },
  {
    path: '/New-cart',
    name: 'New-cart',
    component: resolve => require(['@/views/New-cart'], resolve),
    meta: {
      title: '新的购物车'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
