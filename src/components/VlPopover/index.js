/* eslint-disable no-new */
import VlPopover from './VlPopover'

VlPopover.install = (Vue, options) => {
  Vue.prototype.$VlPopover = new (Vue.extend(VlPopover))({ propData: options })
  if (process.env.NODE_ENV === 'development') {
    window.$VlPopover = Vue.prototype.$VlPopover
  }
}

export default VlPopover
