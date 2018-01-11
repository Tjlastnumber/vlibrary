<template>
  <transition name="vl-toast-fade">
    <div v-show="visible" class="vl-toast" :class="toastClass">
      <slot>
        Toast
      </slot>
    </div>
  </transition>
</template>

<script>
import { absolutePosition, Position } from '../../utils/util.js'
export default {
  name: 'VlToast',
  props: {
    offset: {
      type: Number,
      default () {
        return 10
      }
    },
    timeout: {
      type: Number,
      default () {
        return 5
      }
    },
    customClass: { type: [String, Array] }
  },
  data () {
    this.visibleTimer = null
    return {
      visible: false,
      dock: Position.top,
      transition: true
    }
  },
  created () {
    if (!this.$parent) {
      this.$mount()
      document.body.appendChild(this.$el)
      this.$emit('created')
    }
  },
  mounted () {
    window.addEventListener('resize', this.asynSetLocation, false)
  },
  destroyed () {
    window.removeEventListener('resize', this.asynSetLocation, false)
  },
  computed: {
    toastClass () {
      const transfrom = this.transition ? 'transition-transfrom' : ''
      return [this.customClass, transfrom]
    },
    /**
     * 计算起始位置
     */
    startLocation () {
      let result = null
      const location = absolutePosition(this.$el, document.body, this.offset, this.dock)

      if (this.dock.includes('left')) {
        result = {
          x: -location.x - location.width,
          y: location.y
        }
      }
      if (this.dock === 'top') {
        result = {
          x: location.x,
          y: -location.y - location.height
        }
      }
      if (this.dock.includes('right')) {
        result = {
          x: location.x + location.width,
          y: location.y
        }
      }
      if (this.dock === 'bottom') {
        result = {
          x: location.x,
          y: location.y + location.height
        }
      }
      if (this.dock === 'middle') {
        result = {
          x: location.x,
          y: location.y
        }
      }

      return result
    }
  },
  methods: {
    /**
     * 设置起始位置
     */
    location (dock) {
      if (this.visible) return this

      this.visible = true
      this.dock = dock
      this.transition = false
      this.asynSetStartLocation()
      this.visible = false
      return this
    },
    show () {
      if (this.visible) return

      this.visible = true
      this.asynSetLocation()
      this.$emit('showed')
      this.delayHide()
    },
    hide () {
      this.visible = false
      this.setStartLocation()
      this.$emit('hided')
    },
    delayHide () {
      clearTimeout(this.visibleTimer)
      this.visibleTimer = setTimeout(this.hide, this.timeout * 1000)
    },
    setStartLocation () {
      const result = this.startLocation
      this.$el.style.transform = `translate3d(${result.x}px, ${result.y}px, 0)`
      this.transition = true
    },
    asynSetStartLocation () {
      this.$nextTick(this.setStartLocation)
    },
    setLocation () {
      if (!this.$el) return
      const location = absolutePosition(this.$el, document.body, this.offset, this.dock)
      let x = location.x + document.body.scrollLeft
      let y = location.y + document.body.scrollTop
      this.$el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      return this
    },
    asynSetLocation () {
      this.$nextTick(this.setLocation)
    }
  }
}
</script>

<style scoped src="./VlToast.css"></style>
