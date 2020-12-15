import { Link } from 'gatsby';
import React from 'react';
import '../assets/footer.css';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { HiOutlineMailOpen } from '@react-icons/all-files/hi/HiOutlineMailOpen';

const Footer = () => (
  <footer style={{ backgroundColor: '#5F0000' }}>
    <div className="footer-wrapper">
      <div>
        <p>
          <Link className="link-to" to="/about-us">
            About us
          </Link>
        </p>
        <p>
          <Link to="/products" className="link-to">
            Products and services
          </Link>
        </p>
        <p>
          <Link to="/products#programmes" className="link-to">
            Programs
          </Link>
        </p>
        <p>
          <Link
            to="https://docs.google.com/forms/d/1h-_BvIOOObfcXlerfhPDO74mWVGLpIsJKw8V112EEn0/edit?usp=sharing"
            target="_blank"
            className="link-to"
          >
            Careers
          </Link>
        </p>
      </div>

      <div>
        <p className="title">Contact</p>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/ampzsports"
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
            href="https://www.linkedin.com/company/ampzsports"
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

          <a
            href="mailto:info@ampzsports.com?subject=Get%in%touch"
            target="_blank"
            rel="noopener noreferrer"
            className="link-to social"
          >
            <HiOutlineMailOpen />
          </a>
        </div>
        <p className="mt-3">AMPZ Sports © {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
