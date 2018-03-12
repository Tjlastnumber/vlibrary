<template>
  <div class="vl-left">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VlSideLayout'
}
</script>

<style scoped>
  .vl-left{
    height: 100%;
    max-width: 400px;
    margin: 0;
    padding: 0;
    left: 0;
  }
</style>
