import { URL, fileURLToPath } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// api 自动引入
import AutoImport from 'unplugin-auto-import/vite'

// 组件 自动引入
import Components from 'unplugin-vue-components/vite'

// element, VueUse 组件和指令自动引入解析器
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver
} from 'unplugin-vue-components/resolvers'

// icon 插件
import Icons from 'unplugin-icons/vite'

// icon 自动引入解析器
import IconsResolver from 'unplugin-icons/resolver'

// icon 加载 loader
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// Unocss 插件
import Unocss from 'unocss/vite'

// Unocss 默认预设
import presetUno from '@unocss/preset-uno'

// Unocss 属性模式预设
import presetAttributify from '@unocss/preset-attributify'

// Unocss 指令转换插件
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, './')
  return {
    base: viteEnv.VITE_BASE,
    server: {
      host: '0.0.0.0',
      port: '8080',
      open: true,
      // 端口占用直接退出
      strictPort: true
      // 本地服务 CORS 是否开启
      // cors: true,
      // proxy: {
      //   [viteEnv.VITE_BASE_URL]: {
      //     target: viteEnv.VITE_BASE_SERVER_URL,
      //     // 允许跨域
      //     changeOrigin: true,
      //     rewrite: path => path.replace(viteEnv.VITE_BASE_URL, '/')
      //   }
      // }
    },
    plugins: [
      vue(),
      AutoImport({
        // 需要去解析的文件
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        // imports 指定自动引入的包位置（名）
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        // 生成相应的自动导入json文件。
        eslintrc: {
          // 启用
          enabled: true,
          // 生成自动导入json文件位置
          filepath: './.eslintrc-auto-import.json',
          // 全局属性值
          globalsPropValue: true
        },
        resolvers: [
          ElementPlusResolver()
        ]
      }),
      Components({
        // imports 指定组件所在目录，默认为 src/components
        dirs: ['src/components/', 'src/pages/'],
        // 需要去解析的文件
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver(),
          VueUseComponentsResolver(),
          VueUseDirectiveResolver(),
          // icon组件自动引入解析器使用
          IconsResolver({
            // icon自动引入的组件前缀 - 为了统一组件icon组件名称格式
            prefix: 'icon',
            // 自定义的icon模块集合
            customCollections: ['demo']
          })
        ]
      }),
      Unocss({
        // 预设
        presets: [presetUno(), presetAttributify()],
        // 指令转换插件
        transformers: [transformerDirective()],
        // 自定义规则
        rules: []
      }),
      Icons({
        compiler: 'vue3',
        customCollections: {
          // icon 图标集，给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
          demo: FileSystemIconLoader('src/assets/svg/demo', svg =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        },
        autoInstall: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
