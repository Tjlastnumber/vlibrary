<template>
  <div>
    <vl-content>
      <form class="form-horizontal">
        <div class="form-group has-success has-feedback">
          <label class="control-label col-sm-3" for="inputSuccess3">考题名称</label>
          <div class="col-sm-9">
<<<<<<< HEAD
            <input type="text" v-model="$route.params.acupointname" class="form-control" id="inputSuccess3" aria-describedby="inputSuccess3Status">
=======
            <input type="text" v-model="$route.params.title" class="form-control" id="inputSuccess3" aria-describedby="inputSuccess3Status">
>>>>>>> 187a6d6aff59e74c1a1b8f0dac2827ec0e7f22a0
            <span id="inputSuccess3Status" class="sr-only">(success)</span>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-10 col-sm-2">
            <button class="btn btn-success" @click="update">提交</button>
            <button class="btn btn-default" @click="$router.push({name: 'acupoints'})">返回</button>
          </div>
        </div>
      </form>
    </vl-content>
  </div>
</template>

<script>
// http://192.168.4.146:8081/api/updateCase/

import VlContent from '../components/VlContent/VlContent.vue'
export default {
  name: 'AcupointEdit',
  components: {
    VlContent
  },
  data () {
    return {
      url: 'http://localhost:8088/api/acupoints/'
    }
  },
  methods: {
    update () {
      // this.$axios.post(this.url + this.$route.params.id, this.$route.params)
      // let params = new URLSearchParams()
      // params.append('acupointname', this.$route.params.acupointname)
      // paams.append('id', .id)
      // console.info(params)
      // console.info(this.$axios.defaults.headers.post)
      this.$axios.post(this.url + 'creat', this.$route.params)
        .then(response => {
          console.info(response.data)
          if (response.data.code === 200) {
            window.confirm('处理失败')
          } else if (response.data.code === 100) {
            window.confirm('处理成功')
          }
        }).catch(err => {
          console.info(err)
        })
    }
  }
}
</script>

<style scoped>
  .btn-success {
    background: #41b883;
  }
</style>

