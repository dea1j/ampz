import { Link } from "gatsby";
import React from "react";
import "../assets/footer.css";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { HiOutlineMailOpen } from "@react-icons/all-files/hi/HiOutlineMailOpen";

const Footer = () => (
  <footer style={{ backgroundColor: "#5F0000" }}>
    <div className="d-flex justify-content-center">
      <div className="footer-content row">
        <div className="col" style={{ margin: "0 30px" }}>
          <p>
            <Link className="link-to" to="/about-us">
              About Us
            </Link>
          </p>
          <p>
            <Link to="/products" className="link-to">
              Product and Services
            </Link>
          </p>
          <p>
            <Link to="/" className="link-to">
              Careers
            </Link>
          </p>
          <p>
            <Link to="/products#programmes" className="link-to">
              Programs
            </Link>
          </p>
        </div>

        <div className="col" style={{ margin: "0 30px", width: "310px" }}>
          <p className="title" style={{ fontSize: "900" }}>
            Contact
          </p>
          <div>
            <a
              href="https://web.facebook.com/ampz.tv/"
              className="link-to social"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/ampzsports"
              target="_blank"
              rel="noopener noreferrer"
              className="link-to social"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/ampz-tv/"
              className="link-to social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/ampzsports/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-to social"
            >
              <FaInstagram />
            </a>

            <p className="mt-3">
              <HiOutlineMailOpen style={{ margin: "0 0 4px 0" }} /> info@ampz.tv
              <br />© Copyright {new Date().getFullYear()} AMPZ Sports.
              <br /> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
