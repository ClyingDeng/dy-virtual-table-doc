import DefaultTheme from 'vitepress/theme'
import dyTable from 'dy-virtual-table'
import 'dy-virtual-table/dist/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    console.log(111)
    // 注册自定义全局组件
    app.use(dyTable)
  }
}