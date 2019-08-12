import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import Textvue from "@/components/text"
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
      path: '/text',
      name: 'Textvue',
      component: Textvue
    }
  ]
})
