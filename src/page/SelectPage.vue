<template>
  <div>
    <vl-select v-model="selected"
               class="form-control"
               :options="options"></vl-select>
    selected: {{ selected }}
  </div>
</template>

<script>
import VlSelect from '../components/VlSelect/VlSelect.vue'
export default {
  name: 'SelectPage',
  components: { VlSelect },
  props: {
  },
  data () {
    return {
      options: [{
        text: 'text1',
        value: { name: 'name', array: [ 'c', 'a', 'b' ] }
      }, {
        text: 'text2',
        value: { name: 'name2' }
      }, {
        text: 'text3',
        value: 'value'
      }],
      selected: null
    }
  },
  watch: {
    selected (value) {
      console.info(value)
    }
  }
}
</script>

