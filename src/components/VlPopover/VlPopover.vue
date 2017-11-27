<template>
  <transition name="vl-popover-fade">
    <div v-show="visible"
         class="vl-popover"
         :class="vlPopoverClass"
         :style="vlPopoverStyle"
         @mouseenter="onShow"
         @mouseleave="onHidden">
      <div v-show="dock"
           :style="arrowBox"
           class="vl-popover-arrows"></div>
      <span v-if="title" class="vl-popover-title"> {{ title }} </span>
      <p v-if="content"
         class="vl-popover-content">
        {{ content }}
      </p>
    </div>
  </transition>
</template>

<script>
import { scrollable, computedPosition } from '../../utils/domHelpe.js'
export default {
  name: 'VlPopover',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String
    },
    dock: {
      type: Array,
      default () {
        return ['top', 'left', 'right', 'bottom']
      }
    },
    target: null,
    container: null,
    /** @prop 持续时间 */
    duration: { type: Number, default: 400 },
    transition: { type: Boolean, default: true },
    width: { type: [String, Number], default: 'auto' },
    height: { type: [String, Number], default: 'auto' },
    zIndex: { type: Number, default: 999 },
    customClass: { type: [String, Array] }
  },
  data () {
    this.containerNode = null
    this.targetParentNode = null
    this.visibleTime = null
    return {
      visible: true
    }
  },
  computed: {
    arrowBox () {
    },
    vlPopoverClass () {
      return this.customClass
    },
    vlPopoverStyle () {
      let width = this.width
      let zIndex = this.zIndex
      let height = this.height
      return {
        width: typeof width === 'string' ? width : `${width}px`,
        height: typeof hieght === 'string' ? height : `${height}px`,
        zIndex: zIndex
      }
    }
  },
  mounted () {
  },
  methods: {
    onShow () {
      // clearTimeout(this.visibleTime)
      this.visible = true
    },
    onHidden () {
      this.visible = false
    },
    onPosition () {
      this.setContainerNode()
      this.onShow()
      this.asynSetPosition()
    },
    setContainerNode () {
      let oldNode = this.containerNode
      if (!this.target || this.target.parentNode === this.targetParentNode) return
      this.targetParentNode = this.target.parentNode
      let newNode = document.body
      // this.container || getScrollElement(this.target)
      if (newNode === oldNode) return
      if (this.$el.parentNode !== newNode) {
        newNode.appendChild(this.$el)
      }
      const position = newNode.style.position
      if (!position || position === 'static') {
        newNode.style.position = 'relative'
      }
      if (oldNode) {
        oldNode.removeEventListener('scroll', this.scrollHandler, () => {})
      }
      if (scrollable(newNode)) {
        newNode.addEventListener('scroll', this.scrollHandler, () => {})
      }
      this.containerNode = newNode
    },
    asynSetPosition () {
      // https://cn.vuejs.org/v2/api/#Vue-nextTick
      // 等待元素显示之后再进行计算
      this.$nextTick(this.setPosition)
    },
    setPosition () {
      let x = 0
      let y = 0
      const {location} = computedPosition(this.$el, this.target, this.containerNode)
      x = location.x
      y = location.y
      this.$el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
  }
}
</script>

<style src="./VlPopover.css"></style>
