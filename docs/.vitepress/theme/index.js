import DefaultTheme from 'vitepress/theme'
import dyTable from 'dy-virtual-table'
import 'dy-virtual-table/dist/style.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件


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
          import('highlight.js').then((hljs) => {
            let blocks = el.querySelectorAll('pre code');
            blocks.forEach((block) => {
              hljs.highlightBlock(block)
            })
          });
        },
      });
  }
}