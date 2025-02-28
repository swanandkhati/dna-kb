// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Knowledge Center | DNA',
  tagline: 'The Comprehensive Knowledge Base',
  favicon: 'img/phoenix_group_bird_only.ico',

  // Set the production url of your site here
  url: 'HTTP://git.pi108.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'skhati', // Usually your GitHub org/user name.
  projectName: 'support-phoenix', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Support Home',
        logo: {
          alt: 'Phoenix Group Logo',
          src: '/img/dna-logo.svg',
              },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'DNA Docs',
          // },
          {to: '/kb-home', label: 'Knowledge Base Home', position: 'left'},

          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      colorMode:
      {
        disableSwitch: true, // Disables the dark mode toggle
        defaultMode: 'light', // Ensures light mode is the default
      },
      
      footer:
      {
        style: 'dark',
        links: [
          {
            title: 'The Phoenix Group Websites',
            items: [
              {
                label: 'The Phoenix Group',
                to: 'https://phoenix.tech/',
              },
              {
                label: 'Phoenix Innovations',
                to: 'https://pi108.com',
              },
              {
                label: 'Xcaliber Infotech',
                to: 'https://xcaliberinfotech.com',
              },
              {
                label: 'Bit Mapper Integration Technologies',
                to: 'https://bitmapper.com',
              },
              {
                label: 'Griffyn Robotech',
                to: 'https://griffyn.io',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Phoenix Innovations LLC, Static Project Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // apiTheme: require('prism-react-renderer/themes/dracula'),
        // additionalLanguages: ['http', 'json', 'C', 'MuleSoft'],

      },
    }),
};

export default config;
