import React, { Fragment, useState, useEffect } from "react";

import Layout from "../components/layout";
// import Image from "../components/img"
import SEO from "../components/seo";
import { Modal, Carousel } from "react-bootstrap";
import { graphql } from "gatsby";
// import Image from "gatsby-image"
import "../assets/index.css";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

// Partners Images
import par1 from "../img/ampz/partner_logo/Juventus Academy Nigeria.jpg";
import par2 from "../img/ampz/partner_logo/image.png";
import par3 from "../img/ampz/partner_logo/600x600.png";
import par4 from "../img/ampz/partner_logo/mpac sports.png";
import par5 from "../img/ampz/partner_logo/The Future Academy.png";

const IndexPage = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeForm = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Fragment>
      <Modal show={modalOpen} onHide={() => closeForm()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 style={{ color: "#000", fontSize: "30px" }} className="">
              Hey champ!
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p style={{ color: "#000" }} className="">
              We are currently in beta phase and can't wait to have you onboard,
              signup to be the first to know when we go live. Better still,
              stand a chance to be part our test community and gain exclusive
              access! Note: By completing the short form below, you agree to
              receive electronic notifications from AMPZ.
            </p>
            <p style={{ color: "#DB9A02" }} className="">
              By completing the short form below, you agree to receive
              electronic notifications from AMPZ.
            </p>
            <form>
              <div className="form-group">
                <input
                  placeholder="Full name"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Email"
                  className="form-control"
                  type="email"
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Phone number"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <select class="custom-select">
                  <option selected>Sports interest</option>
                  <option value="1">Football</option>
                  <option value="2">Basketball</option>
                  <option value="3">Athletics (Track & Field)</option>
                  <option value="4">Boxing</option>
                  <option value="5">Rugby</option>
                  <option value="6">Cricket</option>
                  <option value="7">Table tennis</option>
                  <option value="8">Others</option>
                </select>
              </div>
              <div className="form-group">
                <button
                  style={{ backgroundColor: "#DB9A02", color: "#fff" }}
                  className="btn btn-block"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Layout>
        <SEO title="Home" />

        {/* Carousel  */}
        <Carousel style={{ minHeight: "80vh" }}>
          <Carousel.Item>
            <div className="slide1">
              {/* <Carousel.Caption> */}
              <div className="hero-text text-center">
                <h2 className="caro-h2">Welcome to AMPZ</h2>
                <p className="caro-p container-fluid">
                  Your dream opportunity is just a profile and a click away.
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
                  Connect and enjoy authentic sports content.
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
                  {/* <img src={talents} alt="talents" /> */}
                </div>
                <div
                  data-aos="fade-left"
                  className="col-lg-6 col-md-6 col-sm-12 about-a"
                >
                  <h3 className="white_test">Talents</h3>
                  <p className="about_part" style={{ fontSize: "17px" }}>
                    We are connecting African sports talents to a world of
                    verified opportunities by leveraging on technology.
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
                    <button onClick={() => setModalOpen(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              {/* The Fan */}
              <div className="row abt">
                <div
                  data-aos="fade-right"
                  data-aos-delay="050"
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <h3 className="white_test">Fan</h3>
                  <p className="about_part" style={{ fontSize: "17px" }}>
                    Showcase and apply for opportunities with ease
                  </p>
                  <div id="lists">
                    <ul className="list">
                      <li>Explore opportunities with ease</li>
                      <li>Follow your sports of interest</li>
                      <li>Stay up to date with trends</li>
                    </ul>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <button onClick={() => setModalOpen(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  id="fan"
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  {/* <img src={academy} alt="talents" /> */}
                </div>
              </div>

              {/* Coach & Academy */}
              <div className="row abt">
                <div
                  data-aos="fade-right"
                  data-aos-delay="050"
                  className="col-lg-6 col-md-6 col-sm-12"
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
                    data-aos-anchor-placement="center-bottom"
                  >
                    <button onClick={() => setModalOpen(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  id="coaches"
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  {/* <img src={academy} alt="talents" /> */}
                </div>
              </div>
              {/* Scouts */}
              <div className="row abt">
                <div
                  data-aos="fade-right"
                  className="col-lg-6 col-md-6 col-sm-12 scout"
                >
                  {/* <img src={scout} alt="talents" /> */}
                </div>
                <div
                  data-aos="fade-left"
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
                    <button onClick={() => setModalOpen(true)}>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div style={{ width: "100%", backgroundColor: "#222" }}>
          <div>
            <p
              className="d-flex justify-content-center pt-5"
              style={{ fontSize: "30px" }}
            >
              PARTNERS
            </p>
            <div className="d-flex justify-content-center p-5 testing bg2">
              <div className="p-3 par1">
                <img src={par1} alt="Juventus Academy Nigeria" />
              </div>
              <div className="p-3 par1">
                <img src={par2} alt="par1" />
              </div>
              <div className="p-3 par1">
                <img src={par4} alt="par1" />
              </div>
              <div className="p-3 par1">
                <img
                  src={par5}
                  alt="mpac sports
"
                />
              </div>

              <div className="p-3 par1">
                <img src={par3} alt="The Future Academy" />
              </div>
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
