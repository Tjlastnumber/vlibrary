<template>
  <layout>
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </layout>
</template>

<script>
import Layout from './Layout.vue'
export default {
  name: 'app',
  components: { Layout }
}
</script>
