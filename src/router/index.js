import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../Layout.vue'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const contentRouter = [{
  path: 'Hello',
  component: _import('HelloWorld'),
  name: 'Hello',
  meta: {
    title: 'Hello',
    ctitle: 'Hello',
    icon: 'Hello'
  }
}, {
  path: '/table',
  name: 'Table',
  cname: 'Table',
  component: _import('TablePage')
}, {
  path: '/content',
  name: 'Content',
  cname: 'Content',
  component: _import('ContentPage')
}, {
  path: '/load',
  name: 'Loading',
  cname: 'Loading',
  component: _import('LoadPage')
}, {
  path: '/acupoints',
  name: 'acupoints',
  cname: '穴位',
  component: _import('AcupointsPage')
}, {
  path: '/acupoints/:id',
  name: 'acupoint',
  cname: '',
  component: _import('AcupointEdit')
}, {
  path: '/pagination',
  name: '分页控件',
  cname: '分页空间',
  component: _import('PaginationPage')
}, {
  path: '/toast',
  name: 'Toast',
  cname: 'Toast',
  component: _import('ToastPage')
}, {
  path: '/questions',
  name: 'questions',
  cname: '考题',
  component: _import('QuestionsPage')
}, {
  path: '/userList',
  name: 'userList',
  cname: '用户列表',
  component: _import('UserPage')
}, {
  path: '/questions/:id',
  name: 'question',
  component: _import('QuestionDetail')
}, {
  path: '/select',
  name: 'Select',
  cname: 'Select',
  component: _import('SelectPage')
}]

export const LayoutRouter = [{
  path: '/login',
  component: _import('LoginPage'),
  hidden: true
},
// { path: '/404', component: _import('errorPage/404'), hidden: true },
// { path: '/401', component: _import('errorPage/401'), hidden: true },
{
  path: '/',
  redirect: 'Hello',
  component: Layout,
  children: contentRouter
},
{
  path: '/components',
  name: 'Components',
  cname: '控件',
  component: Layout,
  children: [{
    path: 'tablecomponent',
    redirect: '/components/table',
    name: 'Table Component',
    cname: 'Table 组件',
    children: [{
      path: 'table',
      name: 'Table',
      cname: 'Table',
      component: _import('TablePage')
    }, {
      path: 'userList',
      name: 'userList',
      cname: '用户列表',
      component: _import('UserPage')
    }]
  }]
}]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: LayoutRouter
})
