<template>
  <div ref="content">
    <slot></slot>
  </div>
</template>

<script>
import Velocity from 'velocity'
export default {
  name: 'VlBreadcrumb',
  props: {
    path: {
      type: String
    }
  },
  watch: {
    path (val) {
      this.$refs['content'].style.opacity = 0
      Velocity(this.$refs['content'], {
        opacity: 1
      })
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

