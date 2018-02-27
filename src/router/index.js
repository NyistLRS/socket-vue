import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import.js')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: _import('home/home'),
      children: [
        {
          path: '',
          name: 'index',
          component: _import('index/index')
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
