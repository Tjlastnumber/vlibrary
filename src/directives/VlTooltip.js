/* eslint-disable */
export default (Vue) => {
  Vue.directive('tooltip', {
    inserted: (el) => {
      console.info('vl-tooltip')
    }
  })
}
