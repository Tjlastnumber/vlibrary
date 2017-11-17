/* eslint-disable */
export default (Vue) => {
  Vue.directive('tooltip', {
    inserted: (el) => {
      console.info('vl-tooltip')
      console.info(Vue.$vlTooltip)
      console.info(el.mouseover())
    }
  })
}
