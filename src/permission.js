// 路由的拦截权限问题
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 引入进度条样式

const whileList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启进度条
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/') // 跳到主页}
    } else {
      next()
    }
  } else {
    if (whileList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
