import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ToastContainer } from "react-toastify";

import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";

import "react-toastify/dist/ReactToastify.css";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Seo />
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        siteDescription={data.site.siteMetadata?.description || `Description`}
      />
      <main>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
