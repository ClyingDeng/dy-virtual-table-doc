import DefaultTheme from 'vitepress/theme'
import dyTable from 'dy-virtual-table'
import 'dy-virtual-table/dist/style.css'
import '../style.css'
import DemoBlock from '../components/DemoBlock.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件



import { defineAsyncComponent } from 'vue'
// @ts-ignore
// const components = import.meta.glob('../components/*.vue')
const components = import.meta.glob('../components/*/*.vue')

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(dyTable)
    // 注册 highlight 指令
    app.directive('highlight', {
        // 指令已挂载到元素上时调用
        mounted(el) {
          // 使用第三方库或自定义逻辑进行代码高亮
          // 例如，使用 highlight.js 进行代码高亮
          import('highlight.js').then(() => {
            let blocks = el.querySelectorAll('pre code');
            blocks.forEach((block) => {
              hljs.highlightBlock(block)
            })
          });
        },
    });
    app.component('DemoBlock', DemoBlock)
    // 循环注册组件
       for (const [key, value] of Object.entries(components)) {
         let len = key.split('/').length - 1
         // 根据vue的文件名称
         const name = key.split('/')[len].split('.vue')[0]
         const pakage = key.split('/')[len-1]
        // 这里的main是我的layout，不需要注册为公共组件
         if (name !== 'main') {
          //  console.log(name,pakage);
          // @ts-ignore
          app.component(pakage+'-'+name, defineAsyncComponent(value))
        }
      }
  }
}