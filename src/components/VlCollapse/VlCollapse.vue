<template>
  <div>
    <div class="vl-collapse-header" @click="priIsOpen = !priIsOpen">
      <span> {{title}} </span>
      <span class="flex"></span>
      <span class="vl-collapse-icon" :class="priIsOpen ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down'"></span>
    </div>
    <div v-show="priIsOpen">
      <slot></slot>
    </div>
  </div>
</template>

<style src="./VlCollapse.css"></style>
<script>
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
      priIsOpen: false
    }
  },
  methods: {
    onOpenChanged (val) {
      this.$emit('openChanged', val)
    }
  },
  watch: {
    isOpen (val) {
      this.priIsOpen = val
      this.onOpenChanged(val)
    }
  }
}
</script>
