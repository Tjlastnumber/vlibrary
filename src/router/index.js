import Vue from 'vue'
import Router from 'vue-router'
import TablePage from '@/page/TablePage'
import ContentPage from '@/page/ContentPage'
import LoadPage from '@/page/LoadPage'
import AcupointEdit from '@/page/AcupointEdit'
import PaginationPage from '@/page/PaginationPage'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    cname: 'Hello',
    component: _import('HelloWorld')
  }, {
    path: '/table',
    name: 'Table',
    cname: 'Table',
    component: TablePage
  }, {
    path: '/content',
    name: 'Content',
    cname: 'Content',
    component: ContentPage
  }, {
    path: '/load',
    name: 'Loading',
    cname: 'Loading',
    component: LoadPage
  }, {
    path: '/acupoints',
    name: 'acupoints',
    cname: '穴位',
    component: resolve => require(['@/page/AcupointsPage'], resolve)
  }, {
    path: '/acupoints/:id',
    name: 'acupoint',
    cname: '',
    component: AcupointEdit
  }, {
    path: '/pagination',
    name: '分页控件',
    cname: '分页空间',
    component: PaginationPage
  }, {
    path: '/toast',
    name: 'Toast',
    cname: 'Toast',
    component: resolve => require(['@/page/ToastPage'], resolve)
  }, {
    path: '/questions',
    name: 'questions',
    cname: '考题',
    component: resolve => require(['@/page/QuestionsPage'], resolve)
  }, {
    path: '/userList',
    name: 'userList',
    cname: '用户列表',
    component: resolve => require(['@/page/UserPage'], resolve)
  }, {
    path: '/questions/:id',
    name: 'question',
    component: resolve => require(['@/page/QuestionDetail'], resolve)
  }, {
    path: '/select',
    name: 'Select',
    cname: 'Select',
    component: resolve => require(['@/page/SelectPage'], resolve)
  }]
})
