<template>
  <div :class="'vl-card vl-card-' + dp">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VlShadow',
  props: {
    dp: Number
  }
}
</script>

<style src="./VlShadow.css"></style>
