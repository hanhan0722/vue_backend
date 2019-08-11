import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: resolve => require(['@/pages/Layout/Layout'], resolve),
      children: [{
        path: '/',
        name: 'Index',
        component: resolve => require(['@/pages/Index/Index'], resolve)
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/Login/Login'], resolve)
    }
  ]
})
