import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {links as footerLinks} from './footer_links';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Informatica',
  tagline: 'Desarrolla sobre Tecnología de la Información',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
    hooks: {
      // Downgrade to warnings so your staging preview or local build won't fail
      onBrokenMarkdownImages: 'warn', 
    },
    remarkRehypeOptions: {
      footnoteLabel: 'Notas al pie',
      footnoteBackLabel: 'Volver a referencia',
    },
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://patricioaraneda.cl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/informatica',


  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-3V2QKLCVQR',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
        {name: 'description', content: 'Manual de Ingeniería Informática. '},
        {name: 'keywords', content: 'ingeniería informática, manual, análisis de datos, consultas sql, bases de datos, extracción de datos, transformación de datos, ejercicios sql'},
        {name: 'author', content: 'Patricio Araneda'},
        {property: 'og:type', content: 'website' },
        {property: 'og:image', content: 'https://patricioaraneda.cl/informatica/img/it-manual.jpg' },
      ],
    image: 'img/it-manual.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Informatica',
      logo: {
        alt: 'Informatica',
        src: 'img/ODC-isotipo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual',
        },
        
        {
          href: 'https://github.com/paranedagarcia/informatica',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: footerLinks,
      copyright: `Copyright © ${new Date().getFullYear()} Patricio Araneda G. | Manual de Informática, Built with <a href="https://docusaurus.io/">Docusaurus</a>. <br />`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
