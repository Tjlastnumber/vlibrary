<template>
  <div class="vl-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VlLayout'
}
</script>


<style scoped>
  .vl-layout {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
