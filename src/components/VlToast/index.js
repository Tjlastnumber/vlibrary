import VlToast from './VlToast.vue'

VlToast.install = (Vue, options) => {
  Vue.prototype.$vlToast = new (Vue.extend(VlToast))({ propData: options })
}

export default VlToast
