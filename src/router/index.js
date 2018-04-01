import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home.vue'
import Cookbook from 'components/cookbook/cookbook'
import Basket from 'components/basket/basket'
import My from 'components/my/my'
import Detail from 'components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/cookbook',
      component: Cookbook
    },
    {
      path: '/basket',
      component: Basket
    },
    {
      path: '/my',
      component: My
    }
  ]
})
