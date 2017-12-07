<template>
  <div v-show="visible" class="vl-toast">
    <slot>
      Toast
    </slot>
  </div>
</template>

<style scoped src="./VlToast.css"></style>

<script>
export default {
  name: 'VlToast',
  data () {
    return {
      visible: { type: Boolean, default: true }
    }
  }
}
</script>

