<template>
  <div class="vl-toolbar-sub" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VlToolbarSub',
  props: {
    toggleWidth: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    // this.showWidth = this.maxWidth === 0 || this.maxWidth > document.body.clientWidth
    this.compareWidth()
    window.addEventListener('resize', this.resize, false)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize, false)
  },
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    resize () {
      this.isShow = this.compareWidth()
    },
    compareWidth () {
      return this.toggleWidth === 0 || this.toggleWidth >= document.body.clientWidth
    }
  },
  watch: {
    maxWidth (val) {
      this.compareWidth()
    }
  }
}
</script>

<style>
  .vl-toolbar-sub{
    font-size: 20px;
    letter-spacing: .005em;
    box-sizing: border-box;
    font-weight: 400;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    height: 64px;
    max-height: 64px;
    margin: 0;
    padding-left: 16px;
  }

  .vl-toolbar-sub button {
    background-color: transparent;
    border: 0;
    margin: 0 6px;
    height: 40px;
    min-width: 0;
    line-height: 24px;
    padding: 8px;
    width: 40px;
    border-radius: 50%;
  }

  .vl-toolbar-sub h2,
  .vl-toolbar-sub h3,
  .vl-toolbar-sub h4,
  .vl-toolbar-sub h5{
    margin: 0;
  }
</style>

