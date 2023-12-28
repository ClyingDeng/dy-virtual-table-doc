import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dy-virtual-table",
  description: " dy-virtual-table组件文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/quick-start' },
      { text: '组件', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '虚拟表格',
        items: [
          { text: '基础表格', link: '/base-table.md' },
          { text: '复杂表格', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClyingDeng/dy-virtual-table' }
    ]
  }
})
