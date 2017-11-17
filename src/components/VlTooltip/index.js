/* eslint-disable no-new */
import vlTooltip from './VlTooltip.vue'

vlTooltip.install = (Vue, options) => {
  Vue.prototype.$vlTooltip = new (Vue.extend(vlTooltip))({ propData: options })
  if (process.env.NODE_ENV === 'development') {
    window.$vlTooltip = Vue.prototype.$vlTooltip
  }
}

export default vlTooltip
