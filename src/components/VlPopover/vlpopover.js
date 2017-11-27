import VlPopover from './VlPopover.vue'

const props = VlPopover.props
const defaultOptions = {}
Object.keys(props).forEach(key => {
  const prop = props[key]
  const dv = props.default
  if (prop && prop.default != null) {
    defaultOptions[key] = typeof dv === 'function' ? dv() : dv
  }
})

let VlPopoverInstance = null

/**
 * 单例模式创建对象
 * @param {Vue} Vue
 * @param {参数值} options
 */
export default function popover (Vue, options) {
  options = options || {}
  if (VlPopoverInstance && VlPopoverInstance.$el.parentNode) {
    Object.assign(VlPopoverInstance, defaultOptions, options)
    if (VlPopoverInstance.target) {
      VlPopoverInstance.onPosition()
    } else {
      VlPopoverInstance.onHidden()
    }
    return VlPopoverInstance
  }
  VlPopoverInstance = new (Vue.extend(VlPopover))({
    propsData: options
  }).$mount()
  VlPopoverInstance.onPosition()
  return VlPopoverInstance
}
