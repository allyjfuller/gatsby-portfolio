
module.exports = {
  siteMetadata: {
    title: "Alexandra Fuller",
    description: "Portfolio Site",
    author: '@allyjfuller',
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-transition-link`,
  ]
}
