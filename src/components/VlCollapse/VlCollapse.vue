<template>
  <div>
    <div class="vl-collapse-header" @click="priIsOpen = !priIsOpen">
      <span class="vl-collapse-title"> {{title}} </span>
      <span class="flex"></span>
      <span class="vl-collapse-icon" :class="priIsOpen ? 'glyphicon glyphicon-menu-down' : 'glyphicon glyphicon-menu-right'"></span>
    </div>
    <div v-show="priIsOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VlCollapse',
  model: {
    prop: 'isOpen',
    event: 'openChanged'
  },
  props: {
    title: { type: String },
    isOpen: { type: Boolean, default: false }
  },
  data () {
    return {
      priIsOpen: false
    }
  },
  methods: {
    onOpenChanged (val) {
      this.$emit('openChanged', val)
    }
  },
  watch: {
    isOpen (val) {
      this.priIsOpen = val
      this.onOpenChanged(val)
    }
  }
}
</script>

<style>
  .vl-collapse-header {
    cursor: pointer;
    border-radius: 0;
    color: white;
    /* cursor: pointer; */
    display: flex;
    -webkit-box-align: inherit;
    -webkit-align-items: inherit;
    align-items: inherit;
    line-height: 40px;
    margin: 0;
    max-height: 40px;
    overflow: hidden;
    padding: 0px 16px;
    text-align: left;
    text-decoration: none;
    white-space: normal;
    width: 100%;
  }

  .vl-collapse-header:hover {
    background-color: rgba(230, 230, 230, 0.2);
  }

  .flex {
    flex: 1;
    -webkit-box-flex: 1;
    min-width: 0;
  }

  .vl-collapse-icon {
    line-height: 40px;
  }
</style>

