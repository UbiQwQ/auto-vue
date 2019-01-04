import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/page/login/login'
import Register from '@/page/register/register'
import Layout from "@/page/layout"
import About from "@/page/about"
import Info from "@/page/info/info"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
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
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
