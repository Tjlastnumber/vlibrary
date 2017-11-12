<template>
  <vl-shadow :dp="dp" class="vl-sidenav" :class="dynamicClass" v-show="isOpen">
    <slot></slot>
  </vl-shadow>
</template>

<style src="./VlSidenav.css"></style>

<script>
  import VlShadow from '../VlShadow/VlShadow.vue'
  export default {
    name: 'VlSidenav',
    components: { VlShadow },
    props: {
      dp: { type: Number, default: 3 },
      isOpen: { type: Boolean, default: false },
      toggleWidth: { type: Number, default: 0 },
      dock: { type: String, default: 'left' },
      absolute: { type: Boolean, default: false }
    },
    model: {
      prop: 'isOpen',
      event: 'onOpenChanged'
    },
    data () {
      return {
        mask: {},
        dynamicClass: {
          'sidenav-static': false,
          'sidenav-absolute': false,
          'sidenav-left': false,
          'sidenav-right': false
        }
      }
    },
    mounted () {
      this.mask = this.$vlMask
      this.mask.$on('clicked', () => { this.onOpenChanged(false) })
      this.dynamicClass['sidenav-left'] = this.dock === 'left'
      this.dynamicClass['sidenav-right'] = !this.dynamicClass['sidenav-left']
      this.onOpenChanging()
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
        return this.toggleWidth <= document.body.clientWidth
      },
      setDynamicClass (val) {
        this.dynamicClass['sidenav-absolute'] = val
        this.dynamicClass['sidenav-static'] = !this.dynamicClass['sidenav-absolute']
      },
      setMask (val) {
        val ? this.mask.show() : this.mask.close()
      }
    },
    watch: {
      isOpen (val) {
        this.setMask(val && !this.compareWidth())
      }
    }
  }
</script>
