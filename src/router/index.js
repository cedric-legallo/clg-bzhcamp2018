import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Store from '@/components/Store'
import Detail from '@/components/Detail'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Hello
  }, {
    path: '/store/:id',
    name: 'detail',
    component: Detail
  }, {
    path: '/store',
    name: 'store',
    component: Store
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }]
})
