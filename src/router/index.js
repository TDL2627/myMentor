import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Shuttle from '../views/Shuttle.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mentors',
    name: 'Mentors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mentors.vue')
  },
  {
    path: '/advice',
    name: 'Advice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Advice.vue')
  },
  {
    path: '/shuttle',
    name: 'Shuttle',
    component: Shuttle
  
  },
  {
    path: '/times',
    name: 'Times',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Times.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
