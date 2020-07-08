const emoji = require("remark-emoji");

module.exports = {
  siteMetadata: {
    title: `OpenRPC`,
    description: `The OpenRPC Specification defines a standard, programming language-agnostic interface description for JSON-RPC 2.0< APIs.`,
    logoUrl: `https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png`,
    author: ``,
    primaryColor: `#3f51b5`, //material-ui primary color
    secondaryColor: `#f50057`, //material-ui secondary color
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        ignoreNextPrev: true
      },
      {
        name: 'Webinar',
        link: '/webinar'
      },
      {
        name: 'Getting Started',
        link: '/getting-started'
      },
      {
        name: 'Beginners',
        link: '/beginners'
      },
      {
        name: 'Use',
        link: '/use'
      },
      {
        name: 'Learn',
        link: '/learn'
      },
      {
        name: 'Developers',
        link: '/developers'
      }
    ],
    footerLinks: [
      {
        name: 'Getting Started',
        link: '/getting-started'
      },
      {
        name: 'Specification',
        link: 'https://spec.open-rpc.org'
      },
      {
        name: 'Playground',
        link: 'https://playground.open-rpc.org'
      },
      {
        name: 'Inspector',
        link: 'https://inspector.open-rpc.org'
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/open_rpc'
      },
      {
        name: 'Discord',
        link: 'https://discord.gg/MWazf5n'
      },
      {
        name: 'Github',
        link: 'https://github.com/open-rpc'
      }
    ]
  },
  plugins: [
    "@etclabscore/gatsby-theme-pristine",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OpenRPC Website`,
        short_name: `openrpc-site`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/openrpc.png`
      },
    }
  ],
}
