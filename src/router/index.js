import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/auth/login'
import Register from '../components/auth/register'
import Layout from '../components/layout'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children : [
          {
          path: '/',
          name: 'home',
          component: Home,
          }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
