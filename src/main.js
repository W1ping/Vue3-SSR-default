import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'

import App from './App.vue'
import { createRouter } from './router'

import 'uno.css'

import '@/assets/css/normalize.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  const router = createRouter()

  app.use(ElementPlus)
  app.use(pinia)
  app.use(router)

  return { app, router }
}

