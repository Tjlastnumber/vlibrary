<template>
  <vl-card>
    <vl-card-content>
      <div class="content">
        <button class="btn btn-default">Toast</button>
      </div>
    </vl-card-content>
  </vl-card>
</template>

<script>
import { VlCard, VlCardHeader, VlCardContent } from '../components/VlCard/index.js'
import VlToast from '../components/VlToast/VlToast.vue'
export default {
  name: 'ToastPage',
  components: { VlToast, VlCard, VlCardHeader, VlCardContent }
}
</script>

<style scoped>
.content {
  margin: 32px;
}
</style>


