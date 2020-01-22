const emoji = require("remark-emoji");

module.exports = {
  siteMetadata: {
    title: `OpenRPC`,
    description: ``,
    logoUrl: `https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png`,
    author: ``,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        ignoreNextPrev: true
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
      },
      {
        name: 'Field Guide',
        link: '/field-guide'
      }
    ],
    footerLinks: [
      {
        name: 'Field Guide',
        link: '/field-guide'
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
        name: `pristine-site`,
        short_name: `pristine-site`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `transparent`,
        display: `minimal-ui`,
      },
    }
  ],
}
