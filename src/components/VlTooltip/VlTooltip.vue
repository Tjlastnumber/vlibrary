<template>
  <div :id="id" class="vl-tooltip-color" v-if="isShow">
    <slot>
      {{ label }}
    </slot>
  </div>
</template>

<style scoped src="./VlTooltip.css"></style>
<script>
export default {
  name: 'VlTooltip',
  props: {
    label: {
      type: String
    },
    isShow: {
      tpye: Boolean,
      default: false
    }
  },
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = `${Date.now()} - ${Math.random()}`
  },
  methods: {
    show () {
      if (!this.$parent) {
        this.$mount()
        document.body.appendChild(this.$el)
      }
      this.isShow = true
    },
    close () {
      this.isShow = false
      if (this.$parent) {
        this.$destroy()
        let that = document.getElementById(this.id)
        document.body.removeChild(that)
      }
    }
  }
}
</script>

