<template>
  <layout>
    <transition name="fade" mode="out-in">
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter
{
  opacity: 0;
  transform: translateY(50px);
}

.fade-leave-to {
  opacity: 0;
}
</style>
