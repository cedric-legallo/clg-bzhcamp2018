import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Product from '@/components/Product'
import Detail from '@/components/Detail'
import Cart from '@/components/Cart'
import Help from '@/components/Help'
import Enonce from '@/components/Enonce'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Hello
  }, {
    path: '/states',
    name: 'states',
    component: Enonce
  }, {
    path: '/store/:id',
    name: 'detail',
    component: Detail
  }, {
    path: '/store',
    name: 'store',
    component: Product
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/help',
    name: 'help',
    component: Help
  }]
})
