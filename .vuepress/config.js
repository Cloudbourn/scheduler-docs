const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Lingering I/O Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#4c14e9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/lingering-logo.svg',
    repo: 'https://github.com/Cloudbourn/scheduler',
    repoLabel: 'Scheduler on Github',
    editLinks: true,
    editLinkText: 'Edit this page on Github',
    docsRepo: 'Cloudbourn/scheduler-docs',
    docsBranch: 'main',
    docsDir: '',

    lastUpdated: false,
    search: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/introduction',
      },
      {
        text: 'Reference',
        link: '/reference/'
      },
      {
        text: 'Docs on Github',
        link: 'https://github.com/Cloudbourn/scheduler-docs'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '🚀 Getting Started',
          path: '/guide/introduction.html',
          collapsable: false,
          children: [
            'introduction',
            'quick-start',
            'contact'
          ]
        },
        {
          title: '💡 Concepts',
          collapsable: false,
          children: [
            'api',
            'billing'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
