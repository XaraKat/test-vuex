import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/Input',
    name: 'input',
    component: () => import( /* webpackChunkName: "about" */'../views/Input.vue')
  },
  {
    path: '/Table',
    name: 'table',
    component: () => import( /* webpackChunkName: "about" */'../views/Table.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
