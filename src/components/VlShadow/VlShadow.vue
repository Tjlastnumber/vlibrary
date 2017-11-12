<template>
  <div :class="'vl-card vl-card-' + dp">
    <slot></slot>
  </div>
</template>

<style src="./VlShadow.css"></style>

<script>
export default {
  name: 'VlShadow',
  props: {
    dp: String
  }
}
</script>
