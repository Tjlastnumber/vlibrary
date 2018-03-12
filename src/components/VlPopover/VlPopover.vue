<template>
  <transition name="vl-popover-fade">
    <div v-show="visible"
         class="vl-popover"
         :class="vlPopoverClass"
         :style="vlPopoverStyle"
         @mouseenter="onShow"
         @mouseleave="onHidden">
      <span v-if="title" class="vl-popover-title"> {{ title }} </span>
      <slot>
        <p v-if="content"
          class="vl-popover-content">
          {{ content }}
        </p>
      </slot>
    </div>
  </transition>
</template>

<script>
import { computedLocation } from '../../utils/util.js'
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
    docks: {
      type: Array,
      default () {
        return ['bottom', 'top', 'right', 'left']
      }
    },
    target: null,
    container: null,
    /** @prop 持续时间 */
    duration: { type: Number, default: 400 },
    transition: { type: Boolean, default: false },
    width: { type: [String, Number], default: 'auto' },
    height: { type: [String, Number], default: 'auto' },
    zIndex: { type: Number, default: 999 },
    customClass: { type: [String, Array] }
  },
  data () {
    this.containerNode = null
    this.targetParentNode = this.target.parentNode
    this.visibleTime = null
    return {
      visible: true
    }
  },
  computed: {
    arrowBox () {
    },
    vlPopoverClass () {
      const transitionClass = this.transition ? 'transition-transfrom' : ''
      return [this.customClass, transitionClass]
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
  methods: {
    onShow () {
      clearTimeout(this.visibleTime)
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
      if (this.containerNode === null) {
        this.containerNode = document.body
        this.targetParentNode = this.target.parentNode
        const position = document.body.style.position
        document.body.appendChild(this.$el)
        if (!position || position === 'static') {
          document.body.style.position = 'relative'
        }
      }
    },
    asynSetPosition () {
      // https://cn.vuejs.org/v2/api/#Vue-nextTick
      // 等待元素显示之后再进行位置设置
      this.$nextTick(this.setPosition)
    },
    setPosition () {
      if (!this.$el || !this.target || !this.containerNode) return
      const position = computedLocation(this.$el, this.target, this.containerNode, 10, this.docks)
      let x = position.x + this.containerNode.scrollLeft
      let y = position.y + this.containerNode.scrollTop
      this.$el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
  }
}
</script>

<style src="./VlPopover.css"></style>
