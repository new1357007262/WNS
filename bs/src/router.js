import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/Info.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('./views/More.vue')
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('./views/Price.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('./views/Course.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/Setting.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: 'hme'
        },
        {
          path: 'hme',
          name: 'hme',
          component: () => import('./views/Hme.vue')
        },
        {
          path: 'scholl',
          name: 'scholl',
          component: () => import('./views/Scholl.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('./views/Profile.vue')
        }
      ]
    },
    {
      path: '*/',
      redirect: '/index'
    }
  ]
})
