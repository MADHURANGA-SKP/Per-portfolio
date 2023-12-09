/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Per-Portfolio`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
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
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Poppins:400,500,700", // Specify the desired font weights
        ],
        display: "swap", // Use font-display: swap to improve loading
        icon: `src/images/tlogo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBHXgwOmXIOQNaqIMLWXsHPoTwZ5-GxvM0",
          authDomain: "per-portfolio-6014c.firebaseapp.com",
          databaseURL:
            "https://per-portfolio-6014c-default-rtdb.firebaseio.com",
          projectId: "per-portfolio-6014c",
          storageBucket: "per-portfolio-6014c.appspot.com",
          messagingSenderId: "960092856942",
          appId: "1:960092856942:web:c4603116bc6c8fa2b57c7f",
        },
      },
    },
  ],
}
