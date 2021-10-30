import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
const Home = () => import('../views/Home.vue')
const Detail = () => import('../views/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path: '/Home',
    component: Home,
    meta: {
      title:'首页'
    },
   
  },
  {
    path: '/Detail',
    component: Detail,
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
