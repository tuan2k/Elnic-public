import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/auth/login'
import Register from '../components/auth/register'
import Layout from '../components/layout'
import Cart from '../components/cart/index'
import Contact from '../components/contact/index'
import About from '../components/about/index'
import Checkout from '../components/checkout/index'



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
          },
          {
            path: '/cart',
            name: 'cart',
            component: Cart,
          },
          {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
          },
          {
            path: '/about',
            name: 'about',
            component: About,
          },
          {
            path: '/contact',
            name: 'contact',
            component: Contact,
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
