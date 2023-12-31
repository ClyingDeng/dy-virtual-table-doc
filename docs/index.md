---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "dy-virtual-table"
  text: " 虚拟表格组件文档"
  tagline: vue3 + ts 大数据虚拟表格
  actions:
    - theme: brand
      text: 快速开始
      link: /quick-start/index
    - theme: alt
      text: 组件 API
      link: /components/index
      

features:
  - title: 指南
    details: 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。
  - title: 组件
    details: 使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。
  - title: 资源
    details: 下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。
---


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/33626292',
    name: 'Clying Deng',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ClyingDeng' },
      { icon: {
          svg: `<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/>
</svg>`
        },
        link: 'https://juejin.cn/user/2735240661441591/posts' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Creator
    </template>
    <template #lead>
      dy-virtual-table 虚拟表格组件开发者由下面成员构成：
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>