import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {
  InfiniteScroll,
  Indicator
} from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.config.productionTip = false

Vue.prototype.$axios = axios

// axios.defaults.headers.post['Content-Type'] = 'Content-Type:application/x-www-form-urlencoded; charset=UTF-8'

axios.interceptors.request.use(rep => {
  Indicator.open({
    text: '玩命加载中...',
    spinnerType: 'fading-circle'
  })
  return rep
})
axios.interceptors.response.use(req => {
  Indicator.close()
  return req
})

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
