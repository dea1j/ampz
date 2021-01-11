/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, keywords, title, lang, image, url, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata?.title;
  const metaAuthor = author || site.siteMetadata.author;
  const metaUrl = url || site.siteMetadata.Url;
  const metaImage = image || site.siteMetadata.image;
  const metaKeywords = keywords || [
    "AMPZ",
    "AMPZ sports",
    "sports",
    "sports opportunities",
    "LinkedIn for sports",
    "scouting in Africa",
    "sports tech",
    "sports tech in Africa",
    "sports tech in Nigeria",
    "football academy",
    " basketball academy",
    "sports talents",
    "Matchmania",
    "grassroot sports",
    "sports development",
    "sports scholarship",
    "sports profile",
    "Juventus academy",
    "Sports technology",
    "sports recruitment",
    "trials",
    "sports competitions",
    "tournament",
    "sports league",
    "sports videos",
    "scout",
    "football agent",
    "sports agent",
    "football intermediary",
    "basketball agent",
    "sports events",
    "athlete",
    "track and field",
    "boxing competition",
    "FC Bayern youth cup",
    "FCB Escola",
    "Barcelona Football Academy",
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={metaTitle ? `%s | ${metaTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:creator`,
          // content: site.siteMetadata?.author || ``,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `instagram:card`,
          content: `summary`,
        },
        {
          name: `instagram:creator`,
          // content: site.siteMetadata?.author || ``,
          content: metaAuthor,
        },
        {
          name: `instagram:image`,
          content: metaImage,
        },
        {
          name: `instagram:title`,
          content: metaTitle,
        },
        {
          name: `instagram:description`,
          content: metaDescription,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;

// export const SEO = ({ description, keywords, title, image, url, author }) => {
//   return (
//     <StaticQuery
//       query={detailsQuery}
//       render={(data) => {
//         const metaDescription =
//           description || data.site.siteMetadata.description;
//         const metaTitle = title || data.site.siteMetadata.title;
//         const metaAuthor = author || data.site.siteMetadata.author;
//         const metaUrl = url || data.site.siteMetadata.Url;
//         const metaImage = image || data.site.siteMetadata.image;
//         const metaKeywords = keywords || [
//           "AMPZ",
//           "AMPZ sports",
//           "sports",
//           "sports opportunities",
//           "LinkedIn for sports",
//           "scouting in Africa",
//           "sports tech",
//           "sports tech in Africa",
//           "sports tech in Nigeria",
//           "football academy",
//           " basketball academy",
//           "sports talents",
//           "Matchmania",
//           "grassroot sports",
//           "sports development",
//           "sports scholarship",
//           "sports profile",
//           "Juventus academy",
//           "Sports technology",
//           "sports recruitment",
//           "trials",
//           "sports competitions",
//           "tournament",
//           "sports league",
//           "sports videos",
//           "scout",
//           "football agent",
//           "sports agent",
//           "football intermediary",
//           "basketball agent",
//           "sports events",
//           "athlete",
//           "track and field",
//           "boxing competition",
//           "FC Bayern youth cup",
//           "FCB Escola",
//           "Barcelona Football Academy",
//         ];
//         return (
//           <Helmet
//             title={title}
//             meta={[
//               {
//                 name: `description`,
//                 content: metaDescription,
//               },
//               {
//                 property: `og:description`,
//                 content: metaDescription,
//               },
//               {
//                 property: `og:type`,
//                 content: `website`,
//               },
//               {
//                 name: `twitter:card`,
//                 content: `summary`,
//               },
//               {
//                 property: `og:url`,
//                 content: metaUrl,
//               },
//               {
//                 property: `og:image`,
//                 content: metaImage,
//               },
//               {
//                 name: `twitter:creator`,
//                 // content: site.siteMetadata?.author || ``,
//                 content: metaAuthor,
//               },
//               {
//                 name: `twitter:title`,
//                 content: metaTitle,
//               },
//               {
//                 name: `twitter:image`,
//                 content: metaImage,
//               },
//               {
//                 name: `twitter:description`,
//                 content: metaDescription,
//               },
//               {
//                 name: `instagram:card`,
//                 content: `summary`,
//               },
//               {
//                 name: `instagram:creator`,
//                 // content: site.siteMetadata?.author || ``,
//                 content: metaAuthor,
//               },
//               {
//                 name: `instagram:image`,
//                 content: metaImage,
//               },
//               {
//                 name: `instagram:title`,
//                 content: metaTitle,
//               },
//               {
//                 name: `instagram:description`,
//                 content: metaDescription,
//               },
//             ].concat(
//               metaKeywords && metaKeywords.length > 0
//                 ? {
//                     name: `keywords`,
//                     content: metaKeywords.join(`, `),
//                   }
//                 : []
//             )}
//           />
//         );
//       }}
//     />
//   );
// };

// const detailsQuery = graphql`
//   query DefaultSEOQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//         image
//       }
//     }
//   }
// `;
