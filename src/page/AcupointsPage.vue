<template>
  <vl-card>
    <vl-card-content>
      <div>
        <vl-toolbar class="vl-content-title">
          <vl-shadow :dp="1">
            <vl-toolbar-sub>
                <h3 style="color: white">穴位列表</h3>
            </vl-toolbar-sub>
          </vl-shadow>
        </vl-toolbar>
        <table class="table table-hover" style="margin: 32px 0 0">
          <thead>
            <tr>
              <th>#</th>
              <th>
                考题名称
              </th>
              <th>
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in acupoints" :key="index">
              <td>
                {{index + 1 + (currentPage - 1) * pageSize}}
              </td>
              <td class="vl-table-content" v-tooltip.top="row.acupointname">
                <span>
                {{ row.acupointname }}
                </span>
              </td>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button @click="editRow(row)" type="button" class="btn btn-xs btn-success">编辑</button>
                  <button @click="deleteRow(row)" type="button" class="btn btn-xs btn-danger">删除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <vl-pagination style="margin: 16px" :total-rows="total" :page-rows="pageSize" v-model="currentPage"/>
      </div>
    </vl-card-content>
  </vl-card>
</template>
<script>
import VlToolbar from '../components/VlToolbar/VlToolbar.vue'
import VlToolbarSub from '../components/VlToolbar/VlToolbarSub.vue'
import VlContent from '../components/VlContent/VlContent.vue'
import VlShadow from '../components/VlShadow/VlShadow.vue'
import VlPagination from '../components/VlPagination/VlPagination.vue'
import VlCard from '../components/VlCard/VlCard.vue'
import VlCardContent from '../components/VlCard/VlCardContent.vue'

export default {
  name: 'AcupointsPage',
  components: {
    VlToolbar, VlToolbarSub, VlContent, VlShadow, VlPagination, VlCard, VlCardContent
  },
  data () {
    return {
      acupoints: null,
      caselist: null,
      pageSize: 10,
      currentPage: 1,
      total: 0,
      restful_url: 'http://localhost:8088/api/acupoints/',
      case_url: 'http://192.168.4.146:8081/api/'
    }
  },
  mounted () {
    this.getAcupoint()
    // this.getAllCase()
  },
  methods: {
    getAcupoint (pages) {
      if (pages < 1 || pages > this.total) return
      if (!pages) pages = 1
      this.$axios({
        method: 'GET',
        url: this.restful_url
      }).then(response => {
        const { list, total } = this.pagination(response.data, pages, this.pageSize)
        this.total = total
        this.acupoints = list
      }).catch(error => {
        console.error(error)
      })
    },
    getAllCase (pages) {
      if (pages < 1 || pages > this.total) return
      if (!pages) pages = 1
      this.$axios.post(this.case_url + 'getAllCase', {
        currentpage: '1',
        pageline: '10'
      }).then(response => {
        const {list, total} = this.pagination(response.data.extend.pageInfo.list, pages, this.pageSize)
        this.caselist = list
        this.currentPage = pages
        this.total = total
      }).catch(error => {
        console.error(error)
      })
    },
    pagination (data, pages, pageSize) {
      const total = data.length
      const minSize = (pages - 1) * pageSize
      const maxSize = pages * pageSize

      return {
        list: data.slice(minSize, maxSize),
        total: total
      }
    },
    editRow (params) {
      this.$router.push({ name: 'acupoint', params: params })
    },
    deleteRow (params) {
      // this.$axios.delete(this.caselist + 'deleteCase/' + params.id)
      this.$axios.delete(this.restful_url + params.id)
        .then(response => {
          if (response.data.code === 100) {
            window.confirm('删除成功')
            this.getAllCase(this.currentPage)
          }
        }).catch(err => {
          console.error(err)
        })
    }
  },
  watch: {
    currentPage (val) {
      this.getAcupoint(val)
    }
  }
}
</script>

<style scoped>
.vl-content-height {
  height: 450px;
}
.vl-content-title {
  background-color: #41b883;
  border-radius: 2px 2px 0 0;
}
.btn-success {
  background-color: #41b883;
}
.content-footer {
  position: relative;
  background-color: #41b883;
}

.vl-table-content {
  max-width:180px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  -icab-text-overflow: ellipsis;
  -khtml-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
</style>
