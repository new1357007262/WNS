import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {
  InfiniteScroll,
  Indicator,
  // Toast
} from 'mint-ui'

Vue.use(InfiniteScroll)
// Vue.use(Toast)
Vue.config.productionTip = false

Vue.prototype.$axios = axios

// axios.defaults.headers.post['Content-Type'] = 'Content-Type:application/x-www-form-urlencoded; charset=UTF-8'
// 请求时加载进度框  
axios.interceptors.request.use(rep => {
  Indicator.open({
    text: '玩命加载中...',
    spinnerType: 'fading-circle'
  })
  return rep
})
// 请求结束，进度框关闭
axios.interceptors.response.use(req => {
  Indicator.close()
  return req
})
// 用户验证
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin') ? true : false
  if (to.path === '/index') {
    next()
  } else {
    isLogin ? next() : next('/index')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
