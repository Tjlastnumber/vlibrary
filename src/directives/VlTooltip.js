import popover from '../components/VlPopover/vlpopover.js'

function clearEvent (el) {
  if (el._tipHandler) {
    el.removeEventListener('click', el._tipHandler)
    el.removeEventListener('mouseenter', el._tipHandler)
  }
  if (el._tipMouseleaveHandler) {
    el.removeEventListener('mouseleave', el._tipMouseleaveHandler)
  }
  delete el._tipHandler
  delete el._tipMouseleaveHandler
  delete el._tipOptions
  delete el._tipInstance
}

export default {
  install (Vue, options) {
    options = options || {}
    const name = options.name || 'tooltip'
    const allDocks = ['bottom', 'top', 'right', 'left']

    Vue.directive(name, {
      bind (el, binding) {
        clearEvent(el)
        const limitDockQueue = allDocks.filter(dock => binding.modifiers[dock])
        const { click, transition } = binding.modifiers
        el._tipOptions = binding.value
        el._tipHandler = () => {
          if (el._tipOptions == null) return
          const options = el._tipOptions
          const docks = limitDockQueue.length
            ? limitDockQueue : allDocks
          const mix = {
            docks,
            transition
          }
          // 一般情况为 v-tip 绑定需要显示的内容
          // 需要配置时可以直接绑定一个配置对象
          const tipOptions = typeof options === 'object'
            ? Object.assign(mix, options, { target: el })
            : Object.assign(mix, { content: String(options), target: el })
          el._tipInstance = popover(Vue, tipOptions)
        }
        el._tipMouseleaveHandler = () => {
          if (el._tipInstance) {
            el._tipInstance.onHidden()
          }
        }
        // 默认触发方式为 hover 触发
        if (click) {
          el.addEventListener('click', el._tipHandler)
        } else {
          el.addEventListener('mouseenter', el._tipHandler)
        }
        el.addEventListener('mouseleave', el._tipMouseleaveHandler)
      },

      update (el, { value, oldValue }) {
        if (value === oldValue) return
        el._tipOptions = value
      },

      unbind (el) {
        const instance = el._tipInstance
        if (instance && instance.destroy) {
          instance.destroy()
        }
        clearEvent(el)
      }
    })
  }
}
