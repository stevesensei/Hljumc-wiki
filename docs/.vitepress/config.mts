import { defineConfig } from 'vitepress'
import vitepressMermaidConfig from '@unify-js/vitepress-mermaid/config'

export default defineConfig({
  extends: vitepressMermaidConfig,
  lang: 'zh-CN',
  title: 'HLJUMC 文档',
  description: '黑龙江大学 Minecraft服务器使用指南',
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
    logo: '/hljumc-mark.svg',
    siteTitle: 'HLJUMC 文档',
    nav: [
      { text: '快速开始', link: '/quickstart/' },
      { text: '邮箱申请', link: '/account/hlju-email' },
      { text: '故障排查', link: '/quickstart/launcher#常见问题' },
    ],
    sidebar: {
      '/quickstart/': [
        {
          text: '快速开始',
          collapsed: false,
          items: [
            { text: '概览', link: '/quickstart/' },
            { text: '进服指南', link: '/quickstart/join-guide' },
            { text: '启动器设置', link: '/quickstart/launcher' },
          ],
        },
      ],
      '/account/': [
        {
          text: '账号与邮箱',
          collapsed: false,
          items: [
            { text: '如何获取黑大邮箱', link: '/account/hlju-email' },
          ],
        },
      ],
    },
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
      copyright: '遇到问题请加入 QQ 群 1108761647。',
    },
  },
})
