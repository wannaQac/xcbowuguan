import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Cunluo from "../views/Cunluo";
import Quanjing from "../views/Quanjing";
import Chuantong from "../views/Chuantong";
import Huanjing from "../views/Huanjing";
import Lvyou from "../views/Lvyou";
import Lishi from "../views/Lishi";
import Meishi from "../views/Meishi";
import Minsu from "../views/Minsu";
import Zhaoshang from "../views/Zhaoshang";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/Cunluo',
  },
  {
    path: '/Cunluo',
    name: 'xxx村',
    component: Cunluo,
  },
  {
    path: '/Quanjing',
    name: '全景展示',
    component: Quanjing,
  },
  {
    path: '/Lishi',
    name: '历史文化',
    component: Lishi,
  },
  {
    path: '/Huanjing',
    name: '环境格局',
    component: Huanjing,
  },
  {
    path: '/Chuantong',
    name: '传统建筑',
    component: Chuantong,
  },
  {
    path: '/Minsu',
    name: '民俗文化',
    component: Minsu,
  },
  {
    path: '/Meishi',
    name: '美食物产',
    component: Meishi,
  },
  {
    path: '/Lvyou',
    name: '旅游导览',
    component: Lvyou,
  },
  {
    path: '/Zhaoshang',
    name: '招商信息',
    component: Zhaoshang,
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
