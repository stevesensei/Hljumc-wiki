import { defineConfig } from 'vitepress'
import vitepressMermaidConfig from '@unify-js/vitepress-mermaid/config'

export default defineConfig({
  extends: vitepressMermaidConfig,
  srcDir: 'docs',
  lang: 'zh-CN',
  title: 'HLJUMC 文档',
  description: '黑龙江大学 Minecraft 非官方校园服务器使用指南',
  cleanUrls: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '问题',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
  themeConfig: {
    logo: '/hlju-logo.png',
    siteTitle: 'HLJUMC 文档',
    nav: [
      { text: '快速开始', link: '/quickstart/' },
      { text: '邮箱申请', link: '/account/hlju-email' },
      { text: '故障排查', link: '/quickstart/launcher#常见问题' },
    ],
    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '概览', link: '/quickstart/' },
          { text: '进服指南', link: '/quickstart/join-guide' },
          { text: '启动器设置', link: '/quickstart/launcher' },
        ],
      },
      {
        text: '账号与邮箱',
        collapsed: false,
        items: [
          { text: '如何获取黑大邮箱', link: '/account/hlju-email' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    outline: [2, 3],
    outlineTitle: '本页目录',
    sidebarMenuLabel: '文档目录',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '切换主题',
    lastUpdated: {
      text: '最近更新',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: 'HLJUMC 由玩家维护，与黑龙江大学官方无关。',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">鲁ICP备2020048115号-8</a>',
    },
  },
})
