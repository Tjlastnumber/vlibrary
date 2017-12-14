<template>
  <vl-card>
    <vl-card-content>
      <div class="content">
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position1" value="left" v-model="position">
            Left
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position2" value="leftTop" v-model="position" >
            Left Top
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position3" value="leftBottom" v-model="position" >
            Left Bottom
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position4" value="top" v-model="position" >
            top
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position5" value="middle" v-model="position" >
            middle
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position6" value="bottom" v-model="position" >
            bottom
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position7" value="rightBottom" v-model="position" >
            Right Buttom
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="position" id="cb_position8" value="right" v-model="position" >
            right
          </label>
        </div>
        {{ position }}
        <button class="btn btn-default" @click="showToast">Toast</button>
        <button class="btn btn-default" @click="showCustomToast">Custom Toast</button>
        <vl-toast ref="customToast">
          <vl-toolbar>
            <vl-toolbar-sub class="flex">
              Is Ok ?
            </vl-toolbar-sub>
            <vl-toolbar-sub style="width: 100px"/>
            <vl-toolbar-sub>
              <button class="btn btn-success" @click="customToastclose">
                <span class="glyphicon glyphicon-ok"></span>
              </button>
              <button class="btn btn-danger" @click="customToastclose">
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </vl-toolbar-sub>
          </vl-toolbar>
        </vl-toast>
      </div>
    </vl-card-content>
  </vl-card>
</template>

<script>
import { VlCard, VlCardHeader, VlCardContent } from '../components/VlCard/index.js'
import VlToolbar from '../components/VlToolbar/VlToolbar.vue'
import VlToolbarSub from '../components/VlToolbar/VlToolbarSub.vue'
import VlToast from '../components/VlToast/VlToast.vue'
export default {
  name: 'ToastPage',
  components: { VlCard, VlCardHeader, VlCardContent, VlToast, VlToolbar, VlToolbarSub },
  data () {
    return {
      position: 'left'
    }
  },
  methods: {
    showToast () {
      this.$vlToast.location(this.position).show()
    },
    showCustomToast () {
      this.$refs['customToast'].location(this.position).show()
    },
    customToastclose () {
      this.$refs['customToast'].hide()
    }
  }
}
</script>

<style scoped>
.content {
  margin: 32px;
}
</style>


