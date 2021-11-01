import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/Detail'
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
      title: '附近门店弹窗'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
