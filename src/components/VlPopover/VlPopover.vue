<template>
  <transition name="vl-popover-fade">
    <div v-show="visible"
         :class="vlPopoverClass"
         :style="vlPopoverStyle"
         @mouseenter="onShow"
         @mouseleave="onHidden">
      <div v-if="direction"
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
import { scrollable, getScrollElement } from '../../utils/domHelpe.js'
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
    direction: {
      type: Array,
      default () {
        return ['top', 'left', 'right', 'bottom']
      }
    },
    target: null,
    container: null,
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
    if (!this.$parent) {
    }
    console.info(this)
  },
  methods: {
    onShow () {
      clearTimeout()
      this.visible = true
    },
    onHidden () {
      this.visible = false
    },
    onPosition () {
      this.setContainerNode()
      this.onShow()
      let x = 0
      let y = 0
      this.$el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    },
    setContainerNode () {
      let oldNode = this.containerNode
      if (!this.target || this.target.parentNode === this.targetParentNode) return
      this.targetParentNode = this.target.parentNode
      let newNode = this.container || getScrollElement(this.target)
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
    }
  }
}
</script>

<style src="./VlPopover.css"></style>
