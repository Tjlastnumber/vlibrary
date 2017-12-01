<template>
  <transition name="vl-loading-fade">
    <div class="vl-loading-mask">
      <vl-load></vl-load>
    </div>
  </transition>
</template>

<script>
import VlLoad from './VlLoad.vue'
export default {
  name: 'VlLoading',
  components: {
    VlLoad
  }
}
</script>

<style>
.vl-loading-fade-enter,
.vl-loading-fade-leave-to {
  opacity: 0;
}

.vl-loading-fade-enter-active,
.vl-loading-fade-leave-active {
  transition: all .3s ease-in;
}
</style>


