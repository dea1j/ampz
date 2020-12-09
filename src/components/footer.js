import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import "../assets/footer.css"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

const Footer = () => (
  <footer style={{ backgroundColor: "#5F0000" }}>
    <div className="container">
      <div className="footer-content row">
        <div className="col">
          <p className="title">Company</p>
          <p>
            <Link className="link-to" to="/about-us">
              About Us
            </Link>
          </p>
          <p>
            <Link className="link-to" to="/about-us#team">
              Team
            </Link>
          </p>
          <p>
            <Link
              className="link-to"
              to="/#careers"
              data-toggle="modal"
              data-target="#careers"
            >
              Careers
            </Link>
          </p>{" "}
        </div>
        <div className="col">
          <p className="title">Products</p>
          <p>
            <Link to="/product#services" className="link-to">
              Platforms and Services
            </Link>
          </p>
          <p>
            <Link to="/product#products" className="link-to">
              Programs
            </Link>
          </p>
        </div>
        <div className="col">
          <p className="title">Legal</p>
          <p>
            <Link to="/terms" className="link-to">
              Terms and Conditions
            </Link>
          </p>
        </div>
        <div className="col">
          <p className="title">Contact</p>
          <p>
            <Link
              to="https://web.facebook.com/ampz.tv/"
              className="link-to social"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com/ampz_tv"
              target="_blank"
              className="link-to social"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/company/ampz-tv/"
              className="link-to social"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              to="https://www.instagram.com/ampz.tv/"
              target="_blank"
              className="link-to social"
            >
              <FaInstagram />
            </Link>

            <p className="mt-3">
              <Link className="link-to" to="mailto:info@ampz.tv">
                info@ampz.tv
              </Link>
              © {new Date().getFullYear()}
            </p>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
