<template>
  <vl-card>
    <vl-card-content>
      <div>
        <vl-pagination :total-rows="4" :limit="4" :page-rows="1" v-model="currentPage"/>
        {{ currentPage }}
      </div>
    </vl-card-content>
  </vl-card>
</template>
<script>
import { VlCard, VlCardContent } from '../components/VlCard/index.js'
import VlPagination from '../components/VlPagination/VlPagination.vue'
export default {
  name: 'PageinationPage',
  data () {
    return {
      currentPage: 1
    }
  },
  components: {
    VlPagination, VlCard, VlCardContent
  }
}
</script>

