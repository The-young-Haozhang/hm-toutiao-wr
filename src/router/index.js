import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/view/login'
import '@/style/index.less'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: '/login', component: Login }
  ]
})

export default router
