<template>
  <vl-shadow :dp="dp" class="vl-sidenav" :class="dynamicClass" v-show="isOpen">
    <slot></slot>
  </vl-shadow>
</template>

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

<style>
  .vl-sidenav {
    background-attachment: scroll;
    background-clip: border-box;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: auto;
    bottom: 0px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    flex-direction: column;
    height: 100%;
    line-height: 22.4px;
    max-width: 272px;
    min-width: 272px;
    overflow-x: auto;
    overflow-y: auto;
    position: static;
    top: 0px;
    width: 100%;
    z-index: 1999;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  }

  .sidenav-left {
    left: 0;
  }

  .sidenav-right {
    right: 0;
  }

  .sidenav-static {
    position: static;
  }

  .sidenav-absolute {
    position: absolute;
  }

  .vl-sidenav ul {
    list-style: none;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
  }
  /* @media (max-width: 960px) {
    .vl-sidenav {
      position: absolute;
    }
  } */

</style>
