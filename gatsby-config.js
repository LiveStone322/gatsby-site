module.exports = {
  siteMetadata: {
    title: `Fedulov Anton's Page`,
    description: `Hi! I'm Creative and innovative front end developer with over one years of web development experience. Graduated from russian Perm State University. Mostly worked with Angular, but open to other frameworks. This site, for instance, was made with React & Gatsby.  Also a web designer as a hobby.`,
    author: `@FedulovAnton`,
    siteUrl: `https://fedulov.site`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          sassRuleTest: /\.global\.css$/,
          sassRuleModulesTest: /\.module\.css$/,
          useResolveUrlLoader: true,
        },
        useResolveUrlLoader: {
          options: {
            sourceMap: true,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
