<template>
  <vl-card class="vl-login">
    <vl-card-header>
      <vl-toolbar>
        <vl-toolbar-sub>Login</vl-toolbar-sub>
      </vl-toolbar>
    </vl-card-header>
    <vl-card-content>
      <div class="vl-login-input">
        <input type="textbox">
        <input type="textbox">
        <button @click="logining">Login</button>
      </div>
    </vl-card-content>
  </vl-card>
</template>

<script>
import VlCard from '../components/VlCard/VlCard.vue'
import VlCardHeader from '../components/VlCard/VlCardHeader.vue'
import VlCardContent from '../components/VlCard/VlCardContent.vue'
import VlToolbar from '../components/VlToolbar/VlToolbar.vue'
import VlToolbarSub from '../components/VlToolbar/VlToolbarSub.vue'
export default {
  name: 'LoginPage',
  components: { VlCard, VlCardHeader, VlCardContent, VlToolbar, VlToolbarSub },
  methods: {
    logining () {
      this.$emit('login')
    }
  }
}
</script>

<style>
  .vl-login {
    width: 400px;
    height: 300px;
    margin: auto;
    position: relative;
    top: 100px;
  }

  .vl-login-input {
    margin: 16px;
  }
</style>


