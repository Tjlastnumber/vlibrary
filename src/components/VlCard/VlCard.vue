<template>
  <div class="vl-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VlCard'
}
</script>

<style scoped>
.vl-card {
  /* color: rgba(0,0,0,0.87);
  background-color: rgb(255,255,255); */
  border-radius: 2px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
}
</style>


