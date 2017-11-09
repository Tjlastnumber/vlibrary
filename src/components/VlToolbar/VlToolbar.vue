<template>
  <div class="vl-toolbar">
    <slot></slot>
  </div>
</template>

<script>
import VlShadow from '../VlShadow/VlShadow.vue'
export default {
  name: 'VlToolbar',
  components: { VlShadow }
}
</script>

<style>
  .vl-toolbar{
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    position: relative;
    z-index: 2;
    font-size: 20px;
    min-height: 64px;
    width: 100%;
    /* padding: 0 16px 0; */
  }
</style>


