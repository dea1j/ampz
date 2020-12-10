import React, { useEffect } from "react";
import { Link } from "gatsby";
import AOS from "aos";

import "../assets/products.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { Card } from "react-bootstrap";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import "../../node_modules/aos/dist/aos.css";

import desktop from "../img/ampz/screens/desktop.png";
import mobile from "../img/ampz/screens/mobile.png";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Layout>
      <SEO title="products" />

      <div
        className="hero text-center"
        style={{ minHeight: "50vh", paddingTop: "50px" }}
      >
        <h5 className="caro-h3">SPORT TECHNOLOGY</h5>
        <h3 className="caro-h2">Innovating for Africa.</h3>
        <p>“There's a way to do it better, find it“</p>
        <span>-Thomas Edison</span>
      </div>
      <main className="container">
        <div data-aos="zoom-in" className="d-flex justify-content-center">
          <img
            src={desktop}
            className="m-5"
            style={{ height: "62vh" }}
            alt="app"
          />
          <img
            src={mobile}
            className="m-5"
            style={{ height: "62vh" }}
            alt="app"
          />
        </div>

        {/* prod */}
        <section style={{ paddingBottom: "50px" }}>
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
                // className="col-sm-4 m-2 text-center"
                className="mt-4"
              >
                <Card
                  style={{
                    width: "15rem",
                    height: "26rem",
                    marginRight: "15px",
                  }}
                >
                  <FaMobileAlt
                    style={{
                      fontSize: "50px",
                      color: "#db9a02",
                      margin: "0 auto",
                      marginTop: "10px",
                    }}
                  />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{
                        fontSize: "30px",
                        fontFamily: "font1",
                        fontWeight: "900",
                      }}
                    >
                      Ampz Online
                    </Card.Title>
                    <Card.Text>
                      Our mobile and web platform designed to help African
                      sports talents build their profiles by curating their data
                      and content while recruiters utilize this data and tools
                      on the platform for recruitment processes.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="100"
                // className="col-sm-4 m-2 text-center"
                className="mt-4"
              >
                <Card
                  style={{
                    width: "15rem",
                    height: "26rem",
                    marginRight: "15px",
                  }}
                >
                  <FaSearch
                    style={{
                      fontSize: "50px",
                      color: "#db9a02",
                      margin: "0 auto",
                      marginTop: "10px",
                    }}
                  />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{
                        fontSize: "30px",
                        fontFamily: "font1",
                        fontWeight: "900",
                      }}
                    >
                      Ampz Scout
                    </Card.Title>
                    <Card.Text>
                      We offer a range of scouting support services including;
                      <ul>
                        <li>Talent hunting: to meet your specification.</li>
                        <li>Talent hunting: to meet your specification.</li>
                        <li> Event Management: for meet-ups and trials.</li>
                        <li>
                          Opportunity promotion: to reach your target audience.
                        </li>
                      </ul>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
                // class="col-sm-3 m-2 text-center"
                className="mt-4"
              >
                <Card
                  style={{
                    width: "15rem",
                    height: "26rem",
                    marginRight: "15px",
                  }}
                >
                  <FaBriefcase
                    style={{
                      fontSize: "50px",
                      color: "#db9a02",
                      margin: "0 auto",
                      marginTop: "10px",
                    }}
                  />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{
                        fontSize: "30px",
                        fontFamily: "font1",
                        fontWeight: "900",
                      }}
                    >
                      Ampz Manager
                    </Card.Title>
                    <Card.Text>
                      Helping sports talents unlock the most of their potential
                      is part of our DNA.
                      <ul>
                        <li>
                          Talent Incubation Program: is where we groom talents
                          alongside our development partners.
                        </li>
                        <li>Due diligence and verification services</li>
                        <li>
                          Talent Marketing: is how we package, promote and match
                          talents to institutions.{" "}
                        </li>
                      </ul>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* !!! PRODUCTS */}
        <section id="products" className="products">
          <div className="container">
            <div className="text-center p-3">
              <div className="mx-auto gold_test">BE PART OF OUR STORY</div>
              <div className="mx-auto white_test">Our Programmes</div>
            </div>

            {/* Scouts */}
            <div className="row abt">
              <div
                data-aos="fade-right"
                className="col-lg-6 col-md-6 col-sm-12"
                id="matchmania"
              >
                {/* <img src={scout} alt="talents" /> */}
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="050"
                className="col-lg-6 col-md-6 col-sm-12 about-a"
              >
                <h3 className="white_test">MatchaMania</h3>
                <p className="about_part" style={{ fontSize: "17px" }}>
                  Be part of our annual talent hunt event where we identify
                  young future champions to join our incubation programme. Want
                  some live grassroots sports action.
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
            <div className="row abt">
              <div
                data-aos="fade-right"
                data-aos-delay="050"
                className="col-lg-6 col-md-6 col-sm-12 about-a"
              >
                <h3 className="white_test">Talent Incubation Programme</h3>
                <p className="about_part" style={{ fontSize: "17px" }}>
                  As part of our contribution to sports development, talents
                  selected in our annual talent hunt (MatchMania) are placed
                  with top tier development institutions on a minimum one-year
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
              >
                {/* <img src={scout} alt="talents" /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Products;
