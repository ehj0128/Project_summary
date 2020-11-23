import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieCommunity from '../views/ProjectList/MovieCommunity.vue'
import STEW from '../views/ProjectList/Stew.vue'
import Taekwondo from '../views/ProjectList/Taekwondo.vue'
import rlottie from '../views/ProjectList/rlottie.vue'
import Dailytown from '../views/ProjectList/DailyTown.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/moviecommunity/',
    name: 'MovieCommunity',
    component: MovieCommunity,
  },
  {
    path: '/STEW/',
    name: 'STEW',
    component: STEW,
  },
  {
    path: '/taekwondo/',
    name: 'Taekwondo',
    component: Taekwondo,
  },
  {
    path: '/rlottie/',
    name: 'rlottie',
    component: rlottie,
  },
  {
    path: '/dailytown/',
    name: 'Dailytown',
    component: Dailytown,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
