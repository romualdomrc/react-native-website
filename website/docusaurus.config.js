const users = require('./showcase.json');
const versions = require('./versions.json');

module.exports = {
  title: 'React Native',
  tagline: 'A framework for building native apps using React',
  organizationName: 'facebook',
  projectName: 'react-native',
  url: 'https://reactnative.dev',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src:
        'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {
      src:
        'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8ryO5qrZo8Exadq9qmt1wtm4_2FdZGEAKHDFEt_2BBlwwM4.js',
      defer: true,
    },
    {src: 'https://snack.expo.dev/embed.js', defer: true},
  ],
  favicon: 'img/favicon.ico',
  titleDelimiter: '·',
  customFields: {
    users,
    facebookAppId: '1677033832619985',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/master/website/',
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          remarkPlugins: [require('@react-native-website/remark-snackplayer')],
          editCurrentVersion: true,
          onlyIncludeVersions:
            process.env.PREVIEW_DEPLOY === 'true'
              ? ['current', ...versions.slice(0, 3)]
              : undefined,
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './sitePlugin',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'survey-2021-announcement',
      content:
        'We want to hear from you! <a href="https://surveys.savanta.com/survey/selfserve/21e3/210643?list=2" target="_blank" rel="noopener noreferrer">Take the 2021 React Community Survey!</a>',
      backgroundColor: '#20232a', // var(--deepdark)
      textColor: '#fff',
      isCloseable: true,
    },
    prism: {
      defaultLanguage: 'jsx',
      theme: require('./core/PrismTheme'),
      additionalLanguages: [
        'java',
        'kotlin',
        'objectivec',
        'swift',
        'groovy',
        'ruby',
      ],
    },
    navbar: {
      title: 'React Native',
      logo: {
        src: 'img/header_logo.svg',
        alt: 'React Native',
      },
      style: 'dark',
      items: [
        {
          label: 'Components',
          type: 'doc',
          docId: 'components-and-apis',
          position: 'right',
        },
        {
          label: 'API',
          type: 'doc',
          docId: 'accessibilityinfo',
          position: 'right',
        },
      ],
    },
    image: 'img/logo-og.png',
    footer: {
      style: 'dark',
      links: [],
      logo: {},
      copyright: `-`,
    },
    algolia: {
      apiKey: '2c98749b4a1e588efec53b2acec13025',
      indexName: 'react-native-v2',
      contextualSearch: true,
    },
    googleAnalytics: {
      trackingID: 'UA-41298772-2',
    },
    gtag: {
      trackingID: 'UA-41298772-2',
    },
    metadatas: [
      {
        property: 'og:image',
        content: 'https://reactnative.dev/img/logo-og.png',
      },
      {name: 'twitter:card', content: 'summary_large_image'},
      {
        name: 'twitter:image',
        content: 'https://reactnative.dev/img/logo-og.png',
      },
      {name: 'twitter:site', content: '@reactnative'},
    ],
  },
};
