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

function SEO({ description, keywords, title, lang, image, Url, author }) {
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
  const defaultTitle = site.siteMetadata?.title;
  const metaAuthor = author || site.siteMetadata.author;
  const metaUrl = Url || site.siteMetadata.Url;
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
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        //
        {
          name: `instagram:card`,
          content: `summary`,
        },
        {
          name: `instagram:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `instagram:title`,
          content: title,
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
