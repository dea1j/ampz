module.exports = {
  siteMetadata: {
    title: "AMPZ",
    description:
      "AMPZ is a sports management platform allowing African talents build their profiles while connecting with verified opportunities, scouts, academies, and fans.",
    author: "AMPZ",
    url: "https://www.ampzsports.com",
    image: "./src/img/logo.png",
    twitterUsername: "@ampzsports",
    instagramUsername: "@ampzsports",
    facebookUsername: "ampzsports",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.ampzsports.com",
        sitemap: "https://www.ampzsports.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AMPZ`,
        short_name: `AMPZSports`,
        url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/img/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                url
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.url;
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `monthly`,
              priority: 0.7,
            };
          }),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
