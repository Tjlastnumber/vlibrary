<template>
  <div>
    <vl-content>
      <form class="form-horizontal">
        <div class="form-group has-success has-feedback">
          <label class="control-label col-sm-3" for="inputSuccess3">考题名称</label>
          <div class="col-sm-9">
            <input type="text" v-model="$route.params.title" class="form-control" id="inputSuccess3" aria-describedby="inputSuccess3Status">
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
import VlContent from '../components/VlContent/VlContent.vue'
export default {
  name: 'AcupointEdit',
  components: {
    VlContent
  },
  methods: {
    update () {
      this.$axios.post('http://192.168.4.146:8081/api/updateCase/' + this.$route.params.id, this.$route.params)
        .then(respones => {
          console.info(respones.data)
          if (respones.data.code === 200) {
            window.confirm('处理失败')
          } else if (respones.data.code === 100) {
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


