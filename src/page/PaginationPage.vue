<template>
  <div>
    <vl-pagination :total-rows="4" :limit="4" :page-rows="1" v-model="currentPage"/>
    {{ currentPage }}
  </div>
</template>
<script>
import VlPagination from '../components/VlPagination/VlPagination.vue'
export default {
  name: 'PageinationPage',
  data () {
    return {
      currentPage: 1
    }
  },
  components: {
    VlPagination
  }
}
</script>

