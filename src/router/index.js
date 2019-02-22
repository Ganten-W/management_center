import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index'),
      //路由嵌套
      children:[
        {
          path:'/info-manage',
          name: 'infoManage',
          component: () => import('@/components/infoManage')
        },
        {
          path:'/spss',
          name: 'spss',
          component: () => import('@/components/spss')
        }
      ]
    },

  ]
})
