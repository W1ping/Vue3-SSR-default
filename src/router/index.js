import {
  createRouter as createVueRouter,
  createMemoryHistory,
  createWebHistory
} from 'vue-router'

export const createRouter = () =>
  createVueRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('@/pages/index.vue')
      },
      {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录',
          keepAlive: true,
          requireAuth: false
        },
        component: () => import('@/pages/login.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '用户中心',
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('@/pages/user.vue')
      },
      {
        path: '/vueuse',
        name: 'vueuse',
        meta: {
          title: 'vueuse',
          keepAlive: true,
          requireAuth: true
        },
        component: () => import('@/pages/vueUse.vue')
      }
    ]
  })
