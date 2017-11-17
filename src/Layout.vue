<template>
  <div id="app" style="height: 100%">
    <vl-layout>

      <vl-side-layout>
        <vl-sidenav class="sidenav-background" :width="272" v-model="isOpenSidenav" :toggle-width="960">

          <header class="sidenav-header">
            <a href="#" class="nav-log">
              <img src="./assets/logo.png">
              <h2 style="color: white"> Vue Admin </h2>
            </a>
          </header>

          <div class="vl-sidenav-content">
            <vl-collapse title="Pages"
                         style="color: white"
                         class="menu-collapse"
                         :is-open="true">
              <ul class="menu-list menu-toggle-list">
                <li>
                  <router-link v-for="(route,index) in $router.options.routes"
                              :class="{active : route.path === $route.path}"
                              :key="index"
                              :to="route.path">
                    {{ route.name }}
                  </router-link>
                </li>
              </ul>
            </vl-collapse>
          </div>

        </vl-sidenav>

      </vl-side-layout>

      <vl-content-layout>

        <vl-toolbar>
          <vl-shadow :dp="1">
            <vl-toolbar-sub v-show="!isOpenSidenav">
              <button @click="isOpenSidenav = !isOpenSidenav">
                <span class="glyphicon glyphicon-menu-hamburger"></span>
              </button>
            </vl-toolbar-sub>
            <vl-toolbar-sub>
              <vl-breadcrumb :path="$route.name">
                <h3> {{ $route.name }} </h3>
              </vl-breadcrumb>
            </vl-toolbar-sub>
            <span class="flex"></span>
            <vl-toolbar-sub style="margin-right: 8px">
              <button @click="isOpenSetting = !isOpenSetting">
                <span class="glyphicon glyphicon-cog"></span>
              </button>
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

      <!-- Setting -->
      <vl-side-layout>
        <vl-sidenav class="setting" :dp="5" :width="272" v-model="isOpenSetting" :dock="'right'" :absolute="true">
          <vl-shadow :dp="1">
            <vl-toolbar>
              <vl-toolbar-sub>
                <h3> Setting </h3>
              </vl-toolbar-sub>
              <span class="flex"></span>
              <vl-toolbar-sub style="margin-right: 8px">
                <button @click="isOpenSetting = !isOpenSetting">
                  <span class="glyphicon glyphicon-remove"></span>
                </button>
              </vl-toolbar-sub>
            </vl-toolbar>
          </vl-shadow>
        </vl-sidenav>
      </vl-side-layout>

    </vl-layout>
  </div>
</template>

<script>
  // components
  import VlToolbar from './components/VlToolbar/VlToolbar.vue'
  import VlToolbarSub from './components/VlToolbar/VlToolbarSub.vue'
  import VlSidenav from './components/VlSidenav/VlSidenav.vue'
  import VlShadow from './components/VlShadow/VlShadow.vue'
  import VlCollapse from './components/VlCollapse/VlCollapse.vue'
  import VlBreadcrumb from './components/VlBreadcrumb/VlBreadcrumb.vue'

  // layout components
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
      VlContentLayout,
      VlCollapse,
      VlBreadcrumb
    },
    data () {
      return {
        isOpenSidenav: true,
        isOpenSetting: false
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style src="./main.css"></style>
