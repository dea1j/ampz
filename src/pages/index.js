import React, { Fragment, useState, useEffect } from "react";

// Modals
import TalentModal from "./indexModals/talentModal";
import FanModal from "./indexModals/fanModal";
import CoachModal from "./indexModals/coachModal";
import ScoutModal from "./indexModals/scoutModal";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Carousel } from "react-bootstrap";
import { graphql } from "gatsby";
import "../assets/index.css";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

import Slide1 from "gatsby-image";

// Partners Images
import Partner1 from "gatsby-image";
import Partner2 from "gatsby-image";
import Partner3 from "gatsby-image";
import Partner4 from "gatsby-image";
import Partner5 from "gatsby-image";

// Products
import Scout from "gatsby-image";
import Fan from "gatsby-image";
import Coach from "gatsby-image";
import Talent from "gatsby-image";

const IndexPage = ({ data }) => {
  const [formOne, setFormOne] = useState(false);
  const [formTwo, setFormTwo] = useState(false);
  const [formThree, setFormThree] = useState(false);
  const [formFour, setFormFour] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Fragment>
      <Layout>
        {/* Form 1 */}
        <TalentModal setFormOne={setFormOne} formOne={formOne} />
        {/* Form 2 */}
        <FanModal setFormTwo={setFormTwo} formTwo={formTwo} />
        {/* Form 3 */}
        <CoachModal setFormThree={setFormThree} formThree={formThree} />
        {/* Form 4 */}
        <ScoutModal setFormFour={setFormFour} formFour={formFour} />

        <SEO title="Home" />

        {/* Carousel  */}
        <Carousel style={{ minHeight: "100vh" }}>
          <Carousel.Item>
            <div className="slide1">
              {/* <Carousel.Caption> */}
              <div className="hero-text-home text-center">
                <h2 className="caro-h2">Welcome to AMPZ</h2>
                <p className="caro-p container-fluid">
                  Discover a world of sporting opportunities
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide4">
              {/* <Carousel.Caption> */}
              <div className="hero-text-home text-center">
                <h2 className="caro-h2">Talent</h2>
                <p className="caro-p container-fluid">
                  Showcase and apply for opportunities with ease
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide2">
              {/* <Carousel.Caption> */}
              <div className="hero-text-home text-center">
                <h2 className="caro-h2">Academy</h2>
                <p className="caro-p container-fluid">
                  Amplify your reach and organise your dream team
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="slide5">
              {/* <Carousel.Caption> */}
              <div className="hero-text-home text-center">
                <h2 className="caro-h2">Scout</h2>
                <p className="caro-p container-fluid">
                  We are making scouting in africa easy. Now you can own your
                  process
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide3">
              {/* <Carousel.Caption> */}
              <div className="hero-text-home text-center">
                <h2 className="caro-h2">Fan</h2>
                <p className="caro-p container-fluid">
                  Connect and enjoy authentic sports content at your convenience
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <main className="container">
          {/* Products */}
          <section id="careers" className="careers">
            <div className="container">
              <div className="text-center">
                <div className="mx-auto gold_test mb-1">LET'S WIN TOGETHER</div>
                <div className="mx-auto white_test">Join The Tribe</div>
              </div>

              {/* Talents */}
              <div className="row abt">
                <div
                  id="talents"
                  data-aos="fade-right"
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <Talent
                    fluid={data.talent.childImageSharp.fluid}
                    alt="Talent"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="col-lg-6 col-md-6 col-sm-12 about-a"
                >
                  <h3 className="white_test">Talent</h3>
                  <p className="about_part" style={{ fontSize: "17px" }}>
                    We are connecting African sports talents to a world of
                    verified opportunities.
                  </p>
                  <div id="lists">
                    <ul className="list">
                      <li>Create your sports profile</li>
                      <li>Showcase your skills</li>
                      <li>Apply to opportunities with ease</li>
                    </ul>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="010"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <button onClick={() => setFormOne(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              {/* Fan */}
              <div className="row abt mb-4">
                <div
                  data-aos="fade-right"
                  className="col-lg-6 col-md-6 col-sm-12 about-a"
                >
                  <h3 className="white_test">Fan</h3>
                  <p className="about_part" style={{ fontSize: "17px" }}>
                    Connect with grassroot talents and enjoy authentic sports
                    content at your convenience.
                  </p>
                  <div id="lists">
                    <ul className="list">
                      <li>Discover the best emerging talents</li>
                      <li>Watch and share sports content</li>
                      <li>Connect with a vibrant community</li>
                    </ul>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="010"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <button onClick={() => setFormTwo(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
                <div
                  id="fan"
                  data-aos="fade-left"
                  data-aos-delay="050"
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <Fan
                    fluid={data.fan.childImageSharp.fluid}
                    alt="Fan"
                    style={{ borderRadius: "20px", Height: "50px" }}
                  />
                </div>
              </div>

              {/* coach & acc*/}
              <div className="row abt">
                <div
                  id="coaches"
                  data-aos="fade-right"
                  data-aos-delay="050"
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <Coach
                    fluid={data.coach.childImageSharp.fluid}
                    alt="Coach"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="col-lg-6 col-md-6 col-sm-12 about-a"
                >
                  <h3 className="white_test">Coach & Academy</h3>
                  <p className="about_part" style={{ fontSize: "17px" }}>
                    Do you want to amplify your reach and get your dream team
                    organized?
                  </p>
                  <div id="lists">
                    <ul className="list">
                      <li>Promote your programmes</li>
                      <li>Manage your team</li>
                      <li>Stay up to date with trends</li>
                    </ul>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="010"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <button onClick={() => setFormThree(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              {/* Scouts */}
              <div className="row abt">
                <div
                  data-aos="fade-right"
                  data-aos-delay="050"
                  className="col-lg-6 col-md-6 col-sm-12 about-a"
                >
                  <h3 className="white_test">Scout & Club</h3>
                  <p className="about_part" style={{ fontSize: "17px" }}>
                    We are making scouting in Africa easier. Now you can own
                    your process.
                  </p>
                  <div id="lists">
                    <ul className="list">
                      <li>Access Africa’s talent pool</li>
                      <li>Recruit effectively using data</li>
                      <li>Manage your scouting portfolio</li>
                    </ul>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <button onClick={() => setFormFour(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="col-lg-6 col-md-6 col-sm-12 scout"
                >
                  <Scout
                    fluid={data.scout.childImageSharp.fluid}
                    alt="Scout"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <div style={{ width: "100%" }}>
          <div>
            <p
              className="d-flex justify-content-center pt-5"
              style={{ fontSize: "30px", fontFamily: "font1" }}
            >
              OUR PARTNERS
            </p>
            <div className=" p-5 testing">
              {/* Start Partner logos */}
              <div className=" text-center">
                <Partner1
                  fluid={data.partner1.childImageSharp.fluid}
                  alt="Juventus Academy Nigeria"
                  className="par1"
                />
                {/* <img src={par1} alt="team" className="par1" /> */}
              </div>

              <div className="text-center">
                <Partner2
                  fluid={data.partner2.childImageSharp.fluid}
                  alt="VOE Foundation"
                  className="par1"
                />
              </div>
              <div className=" text-center">
                <Partner3
                  fluid={data.partner3.childImageSharp.fluid}
                  alt="MPAC Sports"
                  className="par1"
                />
              </div>
              <div className="text-center">
                <Partner4
                  fluid={data.partner4.childImageSharp.fluid}
                  alt="The Future Academy Nigeria"
                  className="par1"
                />
              </div>
              <div className="text-center">
                <Partner5
                  fluid={data.partner5.childImageSharp.fluid}
                  alt="OVM Media"
                  className="par1"
                />
              </div>

              {/* End Partner logos */}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export const query = graphql`
  query {
    fan: file(relativePath: { eq: "fan.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    talent: file(relativePath: { eq: "Rectangle23.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    coach: file(relativePath: { eq: "mya.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    scout: file(relativePath: { eq: "Rectangle54.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    partner1: file(relativePath: { eq: "juve-acc-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    partner2: file(relativePath: { eq: "image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    partner3: file(relativePath: { eq: "mpac-sports.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    partner4: file(relativePath: { eq: "TFA.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    partner5: file(relativePath: { eq: "600x600.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
