<template>
  <vl-shadow class="vl-sidenav" ref="content" :dp="dp" :style="styleObject" :class="dynamicClass">
    <slot></slot>
  </vl-shadow>
</template>

<style src="./VlSidenav.css"></style>

<script>
  import Velocity from 'velocity'
  import VlShadow from '../VlShadow/VlShadow.vue'

  export default {
    name: 'VlSidenav',
    components: { VlShadow },
    props: {
      dp: { type: Number, default: 3 },
      isOpen: { type: Boolean, default: false },
      toggleWidth: { type: Number, default: 0 },
      dock: { type: String, default: 'left' },
      absolute: { type: Boolean, default: false },
      width: { type: Number, default: 400 }
    },
    computed: {
      styleObject () {
        return {
          width: this.width + 'px',
          minWidth: this.width + 'px',
          maxWidth: this.width + 'px'
        }
      }
    },
    model: {
      prop: 'isOpen',
      event: 'onOpenChanged'
    },
    data () {
      return {
        mask: {},
        contentEl: {},
        dynamicClass: {
          'sidenav-static': false,
          'sidenav-absolute': false,
          'sidenav-left': false,
          'sidenav-right': false
        }
      }
    },
    mounted () {
      this.contentEl = this.$refs['content'].$el
      this.mask = this.$vlMask
      this.mask.$on('clicked', () => { this.onOpenChanged(false) })
      this.dynamicClass['sidenav-left'] = this.dock === 'left'
      this.dynamicClass['sidenav-right'] = !this.dynamicClass['sidenav-left']
      this.contentEl.style.width = this.contentEl.style['min-width'] = 0
      this.onOpenChanging()
      this.playAnimate(this.isOpen)
      window.addEventListener('resize', this.onOpenChanging, false)
    },
    destroyed () {
      window.removeEventListener('resize', this.onOpenChanging, false)
    },
    methods: {
      onOpenChanging () {
        this.onOpenChanged(this.compareWidth())
        this.setDynamicClass(!this.compareWidth() || this.absolute)
        this.setMask(false)
      },
      onOpenChanged (val) {
        this.$emit('onOpenChanged', val)
      },
      compareWidth () {
        return this.toggleWidth !== 0 ? this.toggleWidth <= document.body.clientWidth : this.isOpen
      },
      setDynamicClass (val) {
        this.dynamicClass['sidenav-absolute'] = val
        this.dynamicClass['sidenav-static'] = !this.dynamicClass['sidenav-absolute']
      },
      setMask (val) {
        val ? this.mask.show() : this.mask.close()
      },
      enter (el, done) {
        let translate = {
          'min-width': this.width + 'px',
          width: this.width + 'px',
          translateX: 0
        }
        Velocity(el, translate, { duration: 300 })
      },
      leave (el, done) {
        let translate = {
          'min-width': 0,
          width: 0,
          translateX: this.dock === 'left' ? -this.width : this.width
        }
        Velocity(el, translate, { duration: 300 })
      },
      playAnimate (val) {
        val ? this.enter(this.contentEl) : this.leave(this.contentEl)
      },
      visiblity (val) {
        this.contentEl.style.display = val ? '' : 'none'
      }
    },
    watch: {
      isOpen (val) {
        this.setMask(val && !this.compareWidth())
        this.playAnimate(val)
      }
    }
  }
</script>
