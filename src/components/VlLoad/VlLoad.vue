<template>
  <transition>
    <div class="vl-load" :style="vlLoadStyle">
      <div class="vl-load vl-load-child-1" :style="vlChildStyle"></div>
      <div class="vl-load vl-load-child-2" :style="vlChildStyle"></div>
    </div>
  </transition>
</template>

<style src="./VlLoad.css"></style>

<script>
export default {
  name: 'VlLoader',
  props: {
    scale: { type: Number, default: 1 },
    color: { type: String, default: '#4AB984' }
  },
  data () {
    return {
      oldWidth: this.width,
      oldHeight: this.height
    }
  },
  computed: {
    vlLoadStyle () {
      return {
        transform: `scale(${this.scale})`
      }
    },
    vlChildStyle () {
      return {
        background: this.color
      }
    }
  }
}
</script>
