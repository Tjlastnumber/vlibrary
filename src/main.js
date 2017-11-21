// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VlMask from '@/components/VlMask/index.js'
import VlTooltip from '@/components/VlTooltip/index.js'
import vlTooltip from '@/directives/VlTooltip.js'
import '@/assets/css/bootstrap.css'

Vue.use(VlMask, {})
Vue.use(VlTooltip, {})
console.info(Vue.$vlTooltip)
console.info(Vue.$vlMask)
vlTooltip(Vue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
