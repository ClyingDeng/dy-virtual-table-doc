import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dy-virtual-table",
  base: '/dy-virtual-table-doc/',
  description: " dy-virtual-table组件文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/quick-start/', activeMatch: '/quick-start/' },
      { text: '组件', link: '/components/index', activeMatch: '/components/'}
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
            { text: 'canvas 表格', link: '/components/canvas-table' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClyingDeng/dy-virtual-table' }
    ],
    footer:{
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Clying Deng'
    }
  },
  
})
