import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: AppMain
  },
  {
    path: '/map',
    name: 'map',
    component: AppHouse
  },
  {
    path: '/community',
    name: 'community',
    component: AppCommunity
  },
  {
    path: '/news',
    name: 'news',
    component: AppNews
  },
  {
    path: '/member',
    name: 'member',
    component: AppMember
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
