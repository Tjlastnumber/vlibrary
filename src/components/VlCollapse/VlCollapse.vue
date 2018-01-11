<template>
  <div>
    <div class="vl-collapse-header" @click="click">
      <span> {{title}} </span>
      <span class="flex"></span>
      <span ref="icon" class="vl-collapse-icon" :class="'glyphicon glyphicon-menu-down'"></span>
    </div>
    <transition @beforeEnter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter"
                @beforeLeave="beforeLeave"
                @leave="leave"
                @afterLeave="afterLeave">
      <div v-show="priIsOpen">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity'
export default {
  name: 'VlCollapse',
  model: {
    prop: 'isOpen',
    event: 'openChanged'
  },
  props: {
    title: { type: String },
    isOpen: { type: Boolean, default: false }
  },
  data () {
    return {
      priIsOpen: this.isOpen,
      beforeToggleStyle: {}
    }
  },
  mounted () {
    this.retateIcon()
  },
  methods: {
    click () {
      this.priIsOpen = !this.priIsOpen
      this.retateIcon()
      this.onOpenChanged(this.priIsOpen)
    },
    onOpenChanged (val) {
      this.$emit('openChanged', val)
    },
    retateIcon () {
      let elIcon = this.$refs['icon']
      let retateZ = (this.priIsOpen ? '-180' : '0') + 'deg'
      Velocity(elIcon, { rotateZ: retateZ })
    },
    beforeEnter (el) {
      this.$set(this.beforeToggleStyle, 'oldOverflow', this.$el.style.overflow)
    },
    enter (el, done) {
      el.style.height = 0
      this.$el.style.overflow = 'hidden'
      Velocity(el, {
        height: el.scrollHeight + 'px'
      }, {
        complete: done
      })
    },
    afterEnter (el) {
      this.$el.style.overflow = this.beforeToggleStyle.oldOverflow
    },
    beforeLeave (el) {
      this.beforeToggleStyle.oldOverflow = this.$el.style.overflow
    },
    leave (el, done) {
      this.$el.style.overflow = 'hidden'
      Velocity(el, {
        height: 0
      }, {
        complete: done
      })
    },
    afterLeave (el) {
      this.$el.style.overflow = this.beforeToggleStyle.oldOverflow
    }
  },
  watch: {
    isOpen (val) {
      this.priIsOpen = val
    }
  }
}
</script>

<style src="./VlCollapse.css">
</style>
