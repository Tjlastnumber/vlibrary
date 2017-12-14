// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VlMask from '@/components/VlMask/index.js'
import VlPopover from '@/components/VlPopover/index.js'
import VlToast from '@/components/VlToast/index.js'

// axios 中文使用文档地址：
// https://segmentfault.com/a/1190000008470355
import axios from 'axios'

Vue.use(VlMask, { color: '#ffffff' })
Vue.use(VlPopover.vlTooltip)
Vue.use(VlToast)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://localhost:8088/api'
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;'
}

// Object.defineProperty 使用
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperty(Vue.prototype, '$axios', { value: axios })

// axios.defaults.baseURL = 'http://localhost:8088/api'
// axios.defaults.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded;'
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
