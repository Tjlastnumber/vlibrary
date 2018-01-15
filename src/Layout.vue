<template>
  <div style="height: 100%">
    <vl-layout>

      <vl-side-layout>
        <vl-sidenav class="sidenav-background" :width="272" v-model="isOpenSidenav" :toggle-width="960">

          <header class="sidenav-header">
            <a href="#" class="nav-log">
              <img src="./assets/logo.png">
              <h2 style="color: white"> Vue Admin </h2>
            </a>
          </header>

          <!-- <div class="vl-sidenav-content"> -->
            <vl-content class="vl-sidenav-content vl-scrollbar">
              <vl-collapse title="功能列表"
                          class="menu-collapse"
                          :is-open="true">
                <ul class="menu-list menu-toggle-list">
                  <li>
                    <!-- <router-link v-for="(route,index) in $router.options.routes"
                                :key="index"
                                :to="route.path"
                                :active-class="'active'">
                      {{ route.cname }}
                    </router-link> -->
                    <router-link v-for="(route, index) in contentRouter"
                                 :key="index"
                                 :to="route.path"
                                 :active-class="'active'">
                      {{ route.cname }}
                    </router-link>
                  </li>
                </ul>
              </vl-collapse>
            </vl-content>
          <!-- </div> -->

        </vl-sidenav>

      </vl-side-layout>

      <vl-content-layout>

        <vl-toolbar>
          <vl-shadow :dp="1" style="background-color: white">
            <vl-toolbar-sub v-show="!isOpenSidenav">
              <button v-tooltip="'Menu'" @click="isOpenSidenav = !isOpenSidenav">
                <span class="glyphicon glyphicon-menu-hamburger"></span>
              </button>
            </vl-toolbar-sub>
            <vl-toolbar-sub class="flex">
              <vl-breadcrumb :path="$route.name">
              </vl-breadcrumb>
            </vl-toolbar-sub>
            <vl-toolbar-sub style="margin-right: 8px">
              <button class="setting-button"
                      v-tooltip="'Setting'"
                      @click="isOpenSetting = !isOpenSetting">
                <span class="glyphicon glyphicon-cog"></span>
              </button>
            </vl-toolbar-sub>
          </vl-shadow>
        </vl-toolbar>

        <!-- content -->
        <vl-content style="padding: 32px" class="vl-scrollbar">
          <transition name="router-fade" mode="out-in">
            <router-view/>
          </transition>
        </vl-content>
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
                <button class="setting-button"
                        @click="isOpenSetting = !isOpenSetting"
                        v-tooltip="'Close'">
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
  import VlContent from './components/VlContent/VlContent.vue'
  import VlBreadcrumb from './components/VlBreadcrumb/VlBreadcrumb.vue'
  import VlPopover from './components/VlPopover/VlPopover.vue'
  import VlCard from '@/components/VlCard/VlCard'
  import VlCardHeader from '@/components/VlCard/VlCardHeader'
  import VlCardContent from '@/components/VlCard/VlCardContent'
  import { contentRouter } from './router/index.js'

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
      VlContent,
      VlBreadcrumb,
      VlPopover,
      VlCard,
      VlCardHeader,
      VlCardContent
    },
    data () {
      return {
        isOpenSidenav: true,
        isOpenSetting: false,
        contentRouter: contentRouter
      }
    },
    mounted () {
    },
    methods: {
      test () {
        console.info(this.$router)
      }
    }
  }
</script>

<style src="./assets/css/bootstrap.css">
</style>
<style src="./main.css">
</style>
