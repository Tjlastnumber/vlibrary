<template>
  <div>
    <span class="vl-collapse-title" @click="priIsOpen = !priIsOpen"> {{title}} </span>
    <div v-show="priIsOpen">
      <slot></slot>
    </div>
  </div>
</template>

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

<style>
  .vl-collapse-title {
    cursor: pointer;
  }
</style>

