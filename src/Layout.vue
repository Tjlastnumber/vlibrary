<template>
  <div id="app" style="height: 100%">
    <vl-layout>

      <vl-side-layout>
        <vl-sidenav v-model="isOpen" :toggle-width="960" style="background-color: white">
            <!-- <vl-toolbar-sub > -->
            <header class="nav-header">
              <a href="#" class="nav-log">
                <img src="./assets/logo.png">
                <h2 style="color: white"> Vue Admin </h2>
              </a>
            </header>
            <!-- </vl-toolbar-sub> dd-->
        </vl-sidenav>
      </vl-side-layout>

      <vl-content-layout>
        <vl-toolbar>
          <vl-shadow dp="1">
            <vl-toolbar-sub v-show="!isOpen">
              <button @click="isOpen = !isOpen">
                <span class="glyphicon glyphicon-menu-hamburger"></span>
              </button>
            </vl-toolbar-sub>
            <vl-toolbar-sub>
              <h3> {{ title }} </h3>
            </vl-toolbar-sub>
          </vl-shadow>
        </vl-toolbar>
        <div class="vl-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">

                <!-- main content -->
                <slot></slot>

              </div>
            </div>
          </div>
        </div>
      </vl-content-layout>

    </vl-layout>
  </div>
</template>

<script>
  import VlToolbar from './components/VlToolbar/VlToolbar.vue'
  import VlToolbarSub from './components/VlToolbar/VlToolbarSub.vue'
  import VlSidenav from './components/VlSidenav/VlSidenav.vue'
  import VlShadow from './components/VlShadow/VlShadow.vue'

  import VlLayout from './components/VlLayout/VlLayout.vue'
  import VlSideLayout from './components/VlLayout/VlSideLayout.vue'
  import VlContentLayout from './components/VlLayout/VlContentLayout'

  export default {
    name: 'Layout',
    components: {
      VlToolbar,
      VlToolbarSub,
      VlSidenav,
      VlShadow,
      VlSideLayout,
      VlLayout,
      VlContentLayout
    },
    data () {
      return {
        title: 'Toolbar',
        isOpen: true
      }
    },
    methods: {}
  }
</script>

<style>
  .sidenav-content {
    padding: 16px;
  }

  .vl-content {
    padding: 16px;
  }

  html, body {
    height: 100%;
    margin: 0px;
    max-height: 100%;
    max-width: 100%;
    min-height: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0px;
    position: relative;
    width: 100%;
  }

  a.nav-log {
    text-decoration: none;
  }

  .nav-log {
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 0 16px;
    margin: 0 auto;
  }

  .nav-log > img {
    height: 150px;
    width: auto;
    display: block;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .nav-header {
    background-color: #41b883;
    background: -webkit-linear-gradient(#36495d, #41b883);
    background: linear-gradient(#36495d, #41b883);
    border-bottom: 1px solid #41b883;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    z-index: 2;
  }

</style>
