<template>
  <div class="vl-content-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VlContentLayout'
}
</script>

<style scoped>
  .vl-content-layout{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    display: flex;
    top: 0;
    bottom: 0;
    flex-direction: column;
  }
</style>
