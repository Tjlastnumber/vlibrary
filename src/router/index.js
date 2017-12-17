import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import TablePage from '@/page/TablePage'
import ContentPage from '@/page/ContentPage'
import LoadPage from '@/page/LoadPage'
import AcupointEdit from '@/page/AcupointEdit'
import PaginationPage from '@/page/PaginationPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      cname: 'Hello',
      component: HelloWorld
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
      path: '/questions/:id',
      name: 'question',
      component: resolve => require(['@/page/QuestionDetail'], resolve)
    }, {
      path: '/select',
      name: 'Select',
      cname: 'Select',
      component: resolve => require(['@/page/SelectPage'], resolve)
    }
  ]
})
