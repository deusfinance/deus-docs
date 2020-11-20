/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
require("dotenv").config()

module.exports = {
  title: 'DEUS Wiki',
  tagline: 'DEUS.finance documentation.',
  url: 'https://wiki.deus.finance',
  baseUrl: '/',
  favicon: '/favicon.ico',
  organizationName: 'deusfinance', // Usually your GitHub org/user name.
  projectName: 'deus-docs', // Usually your repo name.
  themeConfig: {
    forceDarkMode: true,
    darkMode: true,
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌜',
        darkIconStyle: {
          marginTop: '1px',
        },
        lightIcon: '🌞',
        lightIconStyle: {
          marginTop: '1px',
        },
      },
    },
    sidebarCollapsible: false,
    algolia: {
      apiKey: process.env.ALGOLIA_APIKEY || "your_keys",
      indexName: process.env.ALGOLIA_APPID || "your_keys",
    },
    image: '/img/deus.png', // used for meta tag, in particular og:image and twitter:image
    metaImage: '/img/deus.png',
    googleAnalytics: {
      trackingID: process.env.GA_TRACKING_ID || "your_tracking_ID",
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message
      content:
        'This wiki is still a work in progress, we could use your help at: <a target="_blank" rel="noopener noreferrer" href="https://github.com/deusfinance/deus-docs">github.com/deusfinance/deus-docs</a>',
      backgroundColor: '#111111', // Defaults to `#fff`
      textColor: '#ddd', // Defaults to `#000`
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'DEUS Logo',
        src: '/img/deus.png',
        srcDark: '/img/deus.png',
        // src: '/deus-light.svg',
        // srcDark: '/deus-dark.svg',
      },
      items: [
        {
          href: 'https://github.com/deusfinance/deus-docs',
          className: 'navbar-item-github',
          position: 'left',
        },
        {
          to: 'docs',
          activeBasePath: '/docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          label: 'Blog',
          to: '/blog',
          position: 'left',
        },
      ],
    },

    // In case we want to add code snippets
    prism: {
      defaultLanguage: 'js',
      plugins: ['line-numbers', 'show-language'],
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    footer: {
      links: [
        {
          title: 'DEUS DAO',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Maintainers',
              to: '/dao',
            },
            {
              label: 'Repositories',
              to: '/dao',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'Litepaper',
              to: 'https://deus.finance/litepaper.pdf',
            },
            {
              label: 'Github',
              href: 'https://github.com/deusfinance',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://deus.finance',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/deusdao',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/deusfinance',
            },
          ],
        },
        {
          title: 'Apps',
          items: [
            {
              label: 'Conductor',
              href: 'https://app.deus.finance/conductor',
            },
            {
              label: 'DEUS Swap',
              href: 'https://app.deus.finance/swap',
            },
            {
              label: 'Staking',
              href: 'https://app.deus.finance/staking',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/deusfinance/deus-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
