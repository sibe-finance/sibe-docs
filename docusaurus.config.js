// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sibe',
  tagline: ' ',
  url: 'https://siberian-protocol.github.io',
  baseUrl: '/sibe-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'siberian-protocol', // Usually your GitHub org/user name.
  projectName: 'sibe-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/siberian-protocol',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
        },
      navbar: {
        logo: {
          alt: 'Sibe Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/siberian-protocol',
            position: 'right',
            label: 'GitHub'
          },
        ],
      },
      footer: {},
    }),
    
};


module.exports = config;
