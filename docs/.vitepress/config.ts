import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dy-virtual-table",
  description: " dy-virtual-table组件文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/quick-start/' },
      { text: '组件', link: '/components/index' }
    ],

    sidebar: {
      '/quick-start/':[
        {
          text: '使用指南',
          items: [
            { text: '基础', link: '/quick-start/' },
            // { text: '复杂表格', link: '/api-examples' }
          ]
        }
      ],
      '/components/':[
        {
          text: 'Vtable 组件',
          items: [
            { text: '基础表格', link: '/components/' },
            { text: '图形表格', link: '/components/canvas-table' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClyingDeng/dy-virtual-table' }
    ]
  }
})
