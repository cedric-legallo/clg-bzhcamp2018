import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
    path: '/help',
    name: 'help',
    component: Help
  }]
})
