import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
// import axios from "axios";

// REACT BOOTSTRAP COMPONENTS
import { Card } from "react-bootstrap";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import SEO from "../components/seo";
import { graphql } from "gatsby";
// import Producthero from "gatsby-image";

// CSS
import "../assets/products.css";

// AOS LIBRARY
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use  for styles
// import '../../node_modules/aos/dist/aos.css';

// IMAGE
import desktop from "../img/dayo.png";

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({
    fullname: "",
    organization: "",
    email: "",
    phone: "",
    interest: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { fullname, organization, email, phone, interest, details } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/dea1j/google_sheets/lcKuxwmqEhqYjMCw?tabId=Sheet1",
        {
          method: "post",
          body: JSON.stringify([
            [fullname, organization, email, phone, interest, details],
          ]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setData({
        fullname: "",
        organization: "",
        email: "",
        phone: "",
        interest: "",
        details: "",
      });

      setModalOpen(false);
      toast.success("Awesome! We would be getting back to you");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeForm = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Layout>
      <SEO title="Products" />
      {/* START OF MODAL */}
      <Modal show={modalOpen} onHide={() => closeForm()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 style={{ color: "#000", fontSize: "30px" }} className="">
              Partner with AMPZ
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p style={{ color: "#000" }} className="">
              Our products and services are designed to continuously improve
              talent scouting, management, and value exchange in sports. As a
              front runner in the African sports technology and innovation
              scene, we are combining the power of data, content, and
              communities to drive the much-needed change in processes as well
              as impact lives.
            </p>
            <p style={{ color: "#DB9A02" }} className="">
              Wish to partner with us on this exciting journey? Leave your
              details below and we would be in touch!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  placeholder="Full name"
                  name="fullname"
                  className="form-control"
                  type="text"
                  required="true"
                  value={fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder=" Name of Organization/Company"
                  name="organization"
                  className="form-control"
                  type="text"
                  required="true"
                  value={organization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  placeholder="Email Address"
                  name="email"
                  className="form-control"
                  type="email"
                  required="true"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Phone Number (please include country code)"
                  name="phone"
                  className="form-control"
                  type="number"
                  required="true"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  class="custom-select"
                  name="interest"
                  value={interest}
                  required
                  onChange={handleChange}
                >
                  <option defaultValue>Partnership Interest</option>

                  <option value="Technology/Platform">
                    Technology/Platform
                  </option>
                  <option value="Scouting Services">Scouting Services</option>
                  <option value="Talent Management/Incubation">
                    Talent Management/Incubation
                  </option>
                  <option value="MatchMania/Events">MatchMania/Events</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    htmlFor="details"
                    style={{ marginBottom: "0", color: "#495057" }}
                  >
                    Details{" "}
                  </label>
                  <textarea
                    rows="4"
                    name="details"
                    value={details}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="please leave a brief description of your interest here"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <button
                  style={{ backgroundColor: "#DB9A02", color: "#fff" }}
                  className="btn btn-block"
                  onClick={() => setModalOpen(true)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {/* END OF MODAL */}

      {/* HERO / HEADER */}
      <div className="pdt-hero">
        <div className="ovrlay"></div>

        {/* Caption */}
        <div className="hero-text text-center">
          <h3 className="caro-h3">SPORTS TECHNOLOGY</h3>
          <h2 className="caro-h2">Innovating for Africa</h2>
          <p className="caro-p container-fluid">
            “There's a way to do it better, find it“
          </p>
          <span>Thomas Edison</span>
        </div>
      </div>
      {/* END */}

      {/* MOCKUP */}
      <div
        data-aos="zoom-in"
        className="mockup"
        // style={{ height: "80vh", width: "60%" }}
      >
        <img src={desktop} className="m-3" alt="app" />
      </div>

      {/* SERVICES */}
      <section style={{ paddingBottom: "50px", backgroundColor: "#222" }}>
        <div className="text-center p-3 mb-3">
          <div className="mx-auto gold_test">REACH YOUR GOALS</div>
          <div className="mx-auto white_test">Our Services</div>
        </div>
        <div style={{ color: "#000" }}>
          <div className="rowclassName d-flex flex-wrap justify-content-center">
            {/*  */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-4"
            >
              <Card
                style={{
                  width: "18rem",
                  height: "34rem",
                  marginRight: "15px",
                }}
              >
                <FaMobileAlt
                  style={{
                    fontSize: "60px",
                    color: "#db9a02",
                    margin: "0 auto",
                    marginTop: "20px",
                  }}
                />
                <Card.Body className="card-bdy">
                  <Card.Title
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontFamily: "font1",
                      fontWeight: "900",
                    }}
                  >
                    Platform & Technology
                  </Card.Title>
                  <Card.Text style={{ lineHeight: "1.7" }}>
                    Our mobile and web platform is designed to help African
                    sports talents build their profiles by curating their data
                    and content while recruiters can utilize this data and tools
                    on the platform to optimize their recruitment processes. We
                    are leveling the playing field and creating equal access for
                    all stakeholders in a safe environment. Now everyone can be
                    more effective and efficient at what they do best!
                    <br />{" "}
                    <span style={{ color: "#db9a02", marginTop: "30px" }}>
                      Note: This product is still in beta phase.
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="100"
              className="mt-4"
            >
              <Card
                style={{
                  width: "18rem",
                  height: "34rem",
                  marginRight: "15px",
                }}
              >
                <FaSearch
                  style={{
                    fontSize: "60px",
                    color: "#db9a02",
                    margin: "0 auto",
                    marginTop: "20px",
                  }}
                />
                <Card.Body className="card-bdy">
                  <Card.Title
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontFamily: "font1",
                      fontWeight: "900",
                    }}
                  >
                    Scouting Services
                  </Card.Title>
                  <Card.Text style={{ lineHeight: "1.7" }}>
                    We offer a range of scouting support services including;
                  </Card.Text>
                  <ul className="cu-ul">
                    <li>Talent hunting: to meet your specification.</li>
                    <li>
                      Verification: of talent data, abilities and due diligence.
                    </li>
                    <li> Event Management: for meet-ups and trials.</li>
                    <li>
                      Opportunity promotion: to reach your target audience.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
              className="mt-4"
            >
              <Card
                style={{
                  width: "18rem",
                  height: "34rem",
                  marginRight: "15px",
                }}
              >
                <FaBriefcase
                  style={{
                    fontSize: "60px",
                    color: "#db9a02",
                    margin: "0 auto",
                    marginTop: "20px",
                  }}
                />
                <Card.Body className="card-bdy">
                  <Card.Title
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontFamily: "font1",
                      fontWeight: "900",
                    }}
                  >
                    Talent Management
                  </Card.Title>
                  <Card.Text style={{ lineHeight: "1.5" }}>
                    Helping sports talents make the best of their potential is
                    part of our DNA.
                  </Card.Text>
                  <ul>
                    <li>
                      Talent Incubation Program: is where we groom talents
                      alongside our development partners.
                    </li>
                    <li>
                      Talent Marketing: is how we package, promote and match
                      talents to institutions.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="m-5 d-flex justify-content-center">
          <button
            style={{ width: "250px", padding: "10px" }}
            onClick={() => setModalOpen(true)}
          >
            Partner
          </button>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section id="programmes" className="products container">
        <div className="container">
          <div className="text-center programmes">
            <div className="mx-auto gold_test">BE PART OF OUR STORY</div>
            <div className="mx-auto white_test">Our Programmes</div>
          </div>

          {/* MATCHMANIA */}
          <div className="row programme  " style={{ marginBottom: "6rem" }}>
            <div
              data-aos="fade-right"
              className="col-lg-6 col-md-6 col-sm-12"
              id="matchmania"
            ></div>
            <div
              data-aos="fade-left"
              data-aos-delay="050"
              className="col-lg-6 col-md-6 col-sm-12 about-a"
            >
              <h3 className="white_test">MatchMania</h3>
              <p className="about_part" style={{ fontSize: "17px" }}>
                Be part of our annual talent hunt event where we identify young
                future champions to join our incubation programme. Want some
                live grassroots sports action.
              </p>
              <div id="lists">
                <ul className="list">
                  <li>150+ Applicants</li>
                  <li>10+ Incubated</li>
                  <li>200+ Attendees</li>
                  <li>5+ Partners</li>
                  <li>1 Finale</li>
                </ul>
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              ></div>
            </div>
          </div>

          {/* TIP */}
          <div className="row programme ">
            <div
              data-aos="fade-right"
              data-aos-delay="050"
              className="col-lg-6 col-md-6 col-sm-12 about-a"
            >
              <h3 className="white_test">Talent Incubation Programme</h3>
              <p className="about_part" style={{ fontSize: "17px" }}>
                As part of our contribution to sports development, talents
                selected in our annual talent hunt (MatchMania) are placed with
                top tier development institutions on a minimum one-year
                scholarship to build their potential.
              </p>
              <div id="lists">
                <ul className="list">
                  <li>One year sports development scholarship</li>
                  <li>Profile building</li>
                  <li>Free kits</li>
                  <li>Media exposure</li>
                  <li>Trials and other opportunities</li>
                </ul>
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              ></div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 col-md-6 col-sm-12"
              id="prog2"
            ></div>
          </div>
        </div>
      </section>

      <div className="d-flex justify-content-center p-md-5">
        <div style={{ padding: "10px" }}>
          <button
            style={{ padding: "10px 50px", width: "250px" }}
            onClick={() => setModalOpen(true)}
          >
            Partner
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    prodhero: file(relativePath: { eq: "ProductsHero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Products;
