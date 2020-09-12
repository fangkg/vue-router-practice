import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// VueRouter是插件，使用插件必须使用use()
// this.$router作为一个全局对象，可以访问Router实例，内部Vue.prototype.$router
// 实现并注册两个全局组件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

/**spa点击链接不能刷新页面
 * hash
 * history api
 * 事件hashChange 通知router-view更新
 * 利用vue数据响应式 制造一个响应式数据表示当前url 在router-view的render函数使用它
 */