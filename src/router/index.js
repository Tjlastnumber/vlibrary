import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import TablePage from '@/page/TablePage'
import ContentPage from '@/page/ContentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/table',
      name: 'Table',
      component: TablePage
    }, {
      path: '/content',
      name: 'Content',
      component: ContentPage
    }
  ]
})
