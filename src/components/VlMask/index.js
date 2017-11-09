/* eslint-disable no-new */
import VlMask from './VlMask.vue'

VlMask.install = (Vue, options) => {
  Vue.prototype.$vlMask = new (Vue.extend(VlMask))({ propData: options })
  if (process.env.NODE_ENV === 'development') {
    window.$vlMask = Vue.prototype.$vlMask
  }
}

export default VlMask
