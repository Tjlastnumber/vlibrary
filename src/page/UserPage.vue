<template>
  <vl-card>
    <vl-card-content>
      <div>
        <vl-toolbar class="vl-content-title">
          <vl-shadow :dp="1">
            <vl-toolbar-sub>
                <h3>考题列表</h3>
            </vl-toolbar-sub>
          </vl-shadow>
        </vl-toolbar>
        <table class="table table-hover" style="margin: 32px 0 0">
          <thead>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>
                考题名称
              </th>
              <th>
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in questions" :key="index">
              <td>
                {{index + 1 + (currentPage - 1) * pageSize}}
              </td>
              <td>
                {{ row.id }}
              </td>
              <td class="vl-table-content" v-tooltip.top="row.username">
                <span>
                {{ row.username }}
                </span>
              </td>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button @click="editRow(row)" type="button" class="btn btn-xs btn-success">编辑</button>
                  <button @click="deleteQuestion(row.id)" type="button" class="btn btn-xs btn-danger">删除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <vl-pagination style="margin: 16px" :total-rows="total" :page-rows="pageSize" v-model="currentPage" @currentPageChanged="currentPageChange()"/>
      </div>
      <!-- <div style="margin: 16px">
        <button class="btn btn-default" @click="getAllQuestion">getAll</button>
        <button class="btn btn-primary" @click="getQuestionDetail">getDetail</button>
        <button class="btn btn-success" @click="updateQuestion">update</button>
        <button class="btn btn-danger" @click="deleteQuestion">delete</button>
      </div> -->
    </vl-card-content>
  </vl-card>
</template>

<script>
import { VlCard, VlCardHeader, VlCardContent } from '@/components/VlCard/index.js'
import VlShadow from '@/components/VlShadow/VlShadow'
import VlToolbar from '@/components/VlToolbar/VlToolbar'
import VlToolbarSub from '@/components/VlToolbar/VlToolbarSub'
import VlPagination from '@/components/VlPagination/VlPagination'

import QuestionService from '../service/userService'
// import paginationHelper from '../utils/paginationHelper'

export default {
  name: 'QuestionsPage',
  components: {VlCard, VlCardHeader, VlCardContent, VlShadow, VlPagination, VlToolbar, VlToolbarSub},
  data () {
    return {
      allquestions: null,
      questions: null,
      currentPage: 1,
      total: 1,
      pageSize: 4
    }
  },
  mounted () {
    this.getAllQuestion(this.currentPage)
  },
  methods: {
    getAllQuestion (currentPage) {
      QuestionService.getAll({
        pageSize: this.pageSize,
        pageIndex: currentPage
      }).then(
        response => {
          let result = response.data.data
          console.info(result)
          this.allquestions = result.items
          this.total = result.totalItems
          this.questions = result.items
        }
      ).catch(err => {
        console.info(err)
      })
    },
    getQuestionDetail (id) {
      QuestionService.getDetail(id)
    },
    deleteQuestion (id) {
      QuestionService.deleteById(id)
      let page = this.currentPage
      this.currentPage = 1
      this.getAllQuestion()
      this.currentPage = page
    },
    updateQuestion (id, question) {
      QuestionService.update(id, question)
    },
    editRow (row) {
      this.$router.push({ name: 'question', params: row })
    },
    currentPageChange () {
      // this.questions = paginationHelper(this.allquestions, val, this.pageSize).list
      this.getAllQuestion(this.currentPage)
    }
  }
}
</script>

