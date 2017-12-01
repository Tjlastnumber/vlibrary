<template>
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
          <td class="vl-table-content" v-tooltip.top="row.title">
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
    <vl-shadow :dp="1">
      <div>
        <!-- <nav aria-label="Page navigation" style="margin: 0 32px 0">
          <ul class="pagination">
            <li :class="{'disabled' : currentPage === 1}"
                @click="getAllCase(1)">
              <a href="#"
                aria-label="Previous"
                v-tooltip="'第一页'">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li :class="{'disabled' : currentPage === 1}"
                @click="getAllCase(currentPage - 1)">
              <a href="#"
                aria-label="Previous"
                v-tooltip="'上一页'">
                <span aria-hidden="true">‹</span>
              </a>
            </li>
            <li v-if="currentPage > 4">
              <a> ... </a>
            </li>
            <li v-for="pageNumber in pageNumberDisplay" :key="pageNumber"
                :class="{'active' : pageNumber === currentPage}" >
              <a href="#" @click="getAllCase(pageNumber)">{{ pageNumber }}</a>
            </li>
            <li v-if="currentPage < total - 4">
              <a> ... </a>
            </li>
            <li :class="{'disabled' : currentPage === total}"
                @click="getAllCase(currentPage + 1)">
              <a href="#"
                  aria-label="Next"
                  v-tooltip="'下一页'">
                <span aria-hidden="true">›</span>
              </a>
            </li>
            <li :class="{'disabled' : currentPage === total}"
                @click="getAllCase(total)">
              <a href="#"
                  aria-label="Next"
                  v-tooltip="'最后一页'">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav> -->
        <vl-pagination style="margin: 16px" :total-rows="total" :page-rows="pageSize" v-model="currentPage"></vl-pagination>
      </div>
    </vl-shadow>
  </div>
</template>
<script>
import VlToolbar from '../components/VlToolbar/VlToolbar.vue'
import VlToolbarSub from '../components/VlToolbar/VlToolbarSub.vue'
import VlContent from '../components/VlContent/VlContent.vue'
import VlShadow from '../components/VlShadow/VlShadow.vue'
import VlPagination from '../components/VlPagination/VlPagination.vue'

export default {
  name: 'AcupointsPage',
  components: {
    VlToolbar, VlToolbarSub, VlContent, VlShadow, VlPagination
  },
  data () {
    return {
      acupoints: null,
      caselist: null,
      pageSize: 10,
      currentPage: 1,
      total: 0
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
        url: 'http://localhost:8088/api/acupoints'
      }).then(response => {
        const { list, total } = this.pagination(response.data, pages, this.pageSize)
        this.total = total
        console.info(this.total)
        this.acupoints = list
      }).catch(error => {
        console.error(error)
      })
    },
    getAllCase (pages) {
      if (pages < 1 || pages > this.total) return
      if (!pages) pages = 1
      this.$axios.post('http://192.168.4.146:8081/api/getAllCase', {
        currentpage: '1',
        pageline: '10'
      }).then(response => {
        console.info(response.data.extend.pageInfo.list)
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
      this.$axios.delete('http://192.168.4.146:8081/api/deleteCase/' + params.id)
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
      console.info(val)
      this.getAcupoint(val)
    }
  }
}
</script>

<style>
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

.page-item.active .page-link{
  background-color: #41b883 !important;
  border-color: #41b883 !important;
  color: white !important;
}

.pagination > li > a {
  color: #41b883;
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
