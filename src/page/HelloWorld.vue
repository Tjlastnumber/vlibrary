<template>
  <vl-card>
    <vl-card-header>
      <h1>{{ msg }}</h1>
    </vl-card-header>
    <vl-card-content>
      <div class="hello">
        <h2>Essential Links</h2>
        <ul class="list-group">
          <li class="list-group-item"><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li class="list-group-item"><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li class="list-group-item"><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
          <li class="list-group-item"><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
          <li class="list-group-item"><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul class="list-group">
          <li class="list-group-item"><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li class="list-group-item"><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li class="list-group-item"><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li class="list-group-item"><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
      </div>
    </vl-card-content>
  </vl-card>
</template>

<script>
import VlCard from '@/components/VlCard/VlCard.vue'
import VlCardHeader from '@/components/VlCard/VlCardHeader.vue'
import VlCardContent from '@/components/VlCard/VlCardContent.vue'
export default {
  name: 'HelloWorld',
  components: {
    VlCard, VlCardHeader, VlCardContent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    padding: 0 32px 24px;
  }
</style>
