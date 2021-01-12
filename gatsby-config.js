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
        name: `AMPZSports`,
        short_name: `AMPZSports`,
        url: `/`,
        background_color: `#5f0000`,
        theme_color: `#5f0000`,
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
  ],
};
