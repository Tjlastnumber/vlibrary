<template>
  <div class="menu-collapse" >
    <vl-collapse v-for="(item, index) in routes"
                 :is-children="isChildren"
                 :title="item.cname"
                 :key="index"
                 :padding-left.sync="paddingLeft"
                 v-if="item.name&&!item.hidden&&item.children">
      <ul class="menu-list menu-toggle-list" >
        <li v-for="(child, index) in item.children" :key="index">
            <sidebar :routes="[child]" v-if="child.children"/>
            <router-link v-else
                         v-tooltip="child.cname"
                         :style="activePaddingLeft"
                         :to="child.path"
                         :active-class="'active'">
              {{ child.cname }}
            </router-link>
        </li>
      </ul>
    </vl-collapse>
  </div>
</template>

<script>
import VlCollapse from '@/components/VlCollapse/VlCollapse.vue'

export default {
  name: 'Sidebar',
  components: {
    VlCollapse
  },
  props: {
    routes: { type: Array }
  },
  data () {
    return {
      paddingLeft: 16,
      conPaddingLeft: 16
    }
  },
  computed: {
    isChildren () {
      return this.$parent.$options.name === 'VlCollapse'
    },
    activePaddingLeft () {
      return {
        padding: `0 16px 0 ${this.paddingLeft + this.conPaddingLeft}px`
      }
    }
  },
  watch: {
    paddingLeft (val) {
      console.info(val)
    }
  }
}
</script>
