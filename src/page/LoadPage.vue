<template>
  <vl-card>
    <vl-card-header>
      <h3>Loading</h3>
    </vl-card-header>
    <vl-card-content>
      <vl-load style="margin: 50px;"></vl-load>
    </vl-card-content>
  </vl-card>
</template>

<script>
import VlCard from '../components/VlCard/VlCard.vue'
import VlCardHeader from '../components/VlCard/VlCardHeader.vue'
import VlCardContent from '../components/VlCard/VlCardContent.vue'
import VlLoad from '../components/VlLoad/VlLoad.vue'
export default {
  name: 'LoadPage',
  components: {
    VlCard,
    VlCardHeader,
    VlCardContent,
    VlLoad
  }
}
</script>

