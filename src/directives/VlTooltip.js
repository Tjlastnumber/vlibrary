/* eslint-disable */
import VlTooltip from '../components/VlTooltip/VlTooltip'

export default (Vue) => {
  Vue.directive('tooltip', {
    inserted: (el, binding) => {
      console.info('vl-tooltip')
      console.info(Vue.VlTooltip)
    }
  })
}
