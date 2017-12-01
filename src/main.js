// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VlMask from '@/components/VlMask/index.js'
import VlPopover from '@/components/VlPopover/index.js'
import axios from 'axios'

Vue.use(VlMask, { color: '#ffffff' })
Vue.use(VlPopover.vlTooltip)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://localhost:8088/api'
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
