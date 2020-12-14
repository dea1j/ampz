import React, { Fragment, useState, useEffect } from "react";

// Modals
import TalentModal from "./indexModals/talentModal";
import FanModal from "./indexModals/fanModal";
import CoachModal from "./indexModals/coachModal";
import ScoutModal from "./indexModals/scoutModal";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Carousel } from "react-bootstrap";
// import { graphql } from "gatsby";
import "../assets/index.css";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

// Partners Images
import par1 from "../img/ampz/juve-acc-logo.png";
import par2 from "../img/ampz/partner_logo/image.png";
import par3 from "../img/ampz/partner_logo/600x600.png";
import par4 from "../img/ampz/partner_logo/mpac sports.png";
import par5 from "../img/ampz/partner_logo/The Future Academy.png";

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
              <div className="hero-text text-center">
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
              <div className="hero-text text-center">
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
              <div className="hero-text text-center">
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
              <div className="hero-text text-center">
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
              <div className="hero-text text-center">
                <h2 className="caro-h2">Fan</h2>
                <p className="caro-p container-fluid">
                  Connect and enjoy authentic sports content
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
                ></div>
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
              <div className="row abt">
                <div
                  data-aos="fade-right"
                  className="col-lg-6 col-md-6 col-sm-12 about-a"
                >
                  <h3 className="white_test">Fan</h3>
                  <p className="about_part" style={{ fontSize: "17px" }}>
                    Connect with grassroot talents and enjoy authentic sports
                    content.
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
                ></div>
              </div>

              {/* coach & acc*/}
              <div className="row abt">
                <div
                  id="coaches"
                  data-aos="fade-right"
                  data-aos-delay="050"
                  className="col-lg-6 col-md-6 col-sm-12"
                ></div>
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
                ></div>
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
            <div className="d-flex justify-content-center p-5 testing">
              {/* Start Partner logos */}
              <div className="col-sm-6 col-md-2 text-center">
                <img src={par1} alt="team" className="par1" />
              </div>

              <div className="col-sm-6 col-md-2 text-center">
                <img src={par2} alt="team" className="par1" />
              </div>
              <div className="col-sm-6 col-md-2 text-center">
                <img src={par4} alt="team" className="par1" />
              </div>
              <div className="col-sm-6 col-md-2 text-center">
                <img src={par5} alt="team" className="par1" />
              </div>
              <div className="col-sm-6 col-md-2 text-center">
                <img src={par3} alt="team" className="par1 p-3" />
              </div>

              {/* End Partner logos */}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

// export const query = graphql`
//   {
//     carousel: file(relativePath: { eq: "Group48.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `

export default IndexPage;
