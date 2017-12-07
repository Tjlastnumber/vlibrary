<template>
  <vl-card>
    <vl-card-content>
      <vl-toolbar>
        <vl-toolbar-sub>
          <h1>考题明细</h1>
        </vl-toolbar-sub>
      </vl-toolbar>
      <vl-content>
        <div class="row">
          <div class="col-md-4">
            <label for="">id</label>
          </div>
          <div class="col-md-8">{{question.id}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">title</label>
          </div>
          <div class="col-md-8">{{question.title}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">score</label>
          </div>
          <div class="col-md-8">{{question.score}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">createdate</label>
          </div>
          <div class="col-md-8">{{question.createdate}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">ispicture</label>
          </div>
          <div class="col-md-8">{{question.ispicture}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">isrelease</label>
          </div>
          <div class="col-md-8">{{question.isrelease}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">optiona</label>
          </div>
          <div class="col-md-8">{{question.optiona}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">optionb</label>
          </div>
          <div class="col-md-8">{{question.optionb}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">optionc</label>
          </div>
          <div class="col-md-8">{{question.optionc}}</div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="">optiond</label>
          </div>
          <div class="col-md-8">{{question.optiond}}</div>
        </div>
        <button class="btn btn-default" @click="$router.push({name: 'questions'})">返回</button>
      </vl-content>
    </vl-card-content>
  </vl-card>
</template>

<script>
import { VlCard, VlCardHeader, VlCardContent } from '@/components/VlCard/index.js'
import VlContent from '@/components/VlContent/VlContent'
import VlShadow from '@/components/VlShadow/VlShadow'
import VlToolbar from '@/components/VlToolbar/VlToolbar'
import VlToolbarSub from '@/components/VlToolbar/VlToolbarSub'
import VlPagination from '@/components/VlPagination/VlPagination'

import QuestionService from '../service/questionservice'

export default {
  name: 'QestionDetail',
  components: {VlContent, VlCard, VlCardHeader, VlCardContent, VlShadow, VlToolbar, VlToolbarSub, VlPagination},
  data () {
    return {
      question: {}
    }
  },
  mounted () {
    QuestionService.getDetail(this.$route.params.id)
    .then(response => {
      console.info(response)
      this.question = response.data.extend.question
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

