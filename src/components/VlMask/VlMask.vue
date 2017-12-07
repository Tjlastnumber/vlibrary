<template>
  <transition name="fade">
    <div class="mask" :style="vlMaskStyle" @click="click" v-if="isShow"></div>
  </transition>
</template>

<script>
  export default {
    name: 'VlMask',
    props: {
      color: {
        type: String,
        default: '#000'
      }
    },
    data () {
      return {
        isShow: false,
        enterEffect: '',
        leaveEffect: ''
      }
    },
    created () {
      if (!this.$parent) {
        this.$mount()
        document.body.appendChild(this.$el)
        this.$emit('created')
      }
    },
    computed: {
      vlMaskStyle () {
        return {
          background: this.color
        }
      }
    },
    methods: {
      show () {
        this.isShow = true
        this.$emit('showed')
      },
      close () {
        this.isShow = false
        this.$emit('closed')
      },
      click () {
        this.$emit('clicked')
      }
    }
  }
</script>

<style scoped>
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    opacity: .5;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }

</style>
