import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
