import React, { Fragment, useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/img"
import SEO from "../components/seo"
import {
  Modal,
  Carousel,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import "../assets/index.css"
import AOS from "aos"
import "../../node_modules/aos/dist/aos.css"

// Partners Images
import par1 from "../img/Group.png"
import par2 from "../img/Group(1).png"
import par3 from "../img/Group(2).png"
import par4 from "../img/Group(3).png"
import par5 from "../img/Group(4).png"

import FlipNumbers from "react-flip-numbers"
import Timer from "../components/timer"

const IndexPage = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const closeForm = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <Fragment>
      <Modal show={modalOpen} onHide={() => closeForm()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5
              style={{ color: "gray", fontSize: "30px" }}
              className="text-center"
            >
              Hey Champ
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p style={{ color: "gray" }} className="text-center">
              We are currently in Beta Test and can't wait to have you on-board.
              Be the first to know when we roll-out.
            </p>
            <p style={{ color: "#DB9A02" }} className="text-center">
              By completing the short form below, you agree to receive
              electronic notifications from AMPZ.
            </p>
            <form>
              <div className="form-group">
                <input
                  placeholder="Fullname"
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
                  placeholder="Phone Number"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <select class="custom-select">
                  <option selected>Sport Category</option>
                  <option value="1">Talent</option>
                  <option value="2">Scout & Club</option>
                  <option value="3">Coach & Academy</option>
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
                <h3 className="caro-h3">CONNECTING TALENTS</h3>
                <h2 className="caro-h2">Discover a world of opportunities!</h2>
                <p className="caro-p container-fluid">
                  Your dream opportunity is just a profile and a click away.
                </p>
              </div>
              {/* </Carousel.Caption> */}
            </div>

            {/* <img className="d-block w-100" src={slide1} alt="First slide" /> */}
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide2">
              {/* <Carousel.Caption> */}
              <div className="hero-text text-center">
                <h3 className="caro-h3">BOOSTING ACADEMICS</h3>
                <h2 className="caro-h2">Promote your programmes!</h2>
                <p className="caro-p container-fluid">
                  Attract more promising talents from our fast-growing pool.
                </p>
              </div>

              {/* </Carousel.Caption> */}
            </div>
            {/* <img className="d-block w-100" src={slide2} alt="second slide" /> */}
          </Carousel.Item>
          <Carousel.Item>
            {/* <img className="d-block w-100" src={slide3} alt="Third slide" /> */}

            <div className="slide3">
              <div className="hero-text text-center">
                <h3 className="caro-h3">SIMPLIFYING SCOUTING</h3>
                <h2 className="caro-h2">Recruit from Africa!</h2>
                <p className="caro-p container-fluid">
                  Let's help you find your next top-shot using data driven
                  processess.
                </p>
              </div>
            </div>
            {/* <Carousel.Caption> */}

            {/* </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

        <main className="container">
          {/* <Timer /> */}

          <div className="d-flex justify-content-center m-5">
            {/* <div className="day">00</div>
            <div className="hour">00</div>
            <div className="mins">00</div>
            <div className="sec">00</div> */}
            {/* <div id="countdown-container">
              <div id="countdown">
                <span id="days">0d</span> : <span id="hours">0h</span> :
                <span id="minutes">0m</span> : <span id="seconds">0s</span>
              </div>
            </div> */}

            {/* <div>
              <div id="countdown">
                <div class="cd-box">
                  <p class="numbers days">00</p>
                  <p class="strings timeRefDays">Days</p>
                </div>
                <div class="cd-box">
                  <p class="numbers hours">00</p>
                  <p class="strings timeRefHours">Hours</p>
                </div>
                <div class="cd-box">
                  <p class="numbers minutes">00</p>
                  <p class="strings timeRefMinutes">Minutes</p>
                </div>
                <div class="cd-box">
                  <p class="numbers seconds">00</p>
                  <p class="strings timeRefSeconds">Seconds</p>
                </div>
              </div>
            </div> */}
            {/* <!-- end div#countdown --> */}
            {/* <div class="rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
              <p class="mb-4 font-weight-bold text-uppercase">
                Countdown to App Launch
              </p>
              <div
                id="clock-b"
                class="countdown-circles d-flex flex-wrap justify-content-center pt-4"
              >
                00 d: 00 hr : 00 m : 00 s
              </div>
            </div> */}
          </div>
          {/* Partners */}

          <div className="d-flex justify-content-center p-5 testing">
            <div className="d-flex">
              <div className="p-3">
                <img src={par1} alt="par1" />
              </div>
              <div className="p-3">
                <img src={par2} alt="par1" />
              </div>
            </div>
            <div className="d-flex">
              <div className="p-3">
                <img src={par4} alt="par1" />
              </div>
              <div className="p-3">
                <img src={par5} alt="par1" />
              </div>
            </div>

            <div className="p-3">
              <img src={par3} alt="par1" />
            </div>
          </div>

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
                  <p className="about_part">
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
              {/* Coach & Academy */}
              <div className="row abt">
                <div
                  data-aos="fade-right"
                  data-aos-delay="050"
                  className="col-lg-6 col-md-6 col-sm-12"
                >
                  <h3 className="white_test">Coach & Academy</h3>
                  <p className="about_part">
                    Do you want to amplify your reach and get your dream team
                    organized?
                  </p>
                  <div id="lists">
                    <ul className="list">
                      <li>Promote your programmes</li>
                      <li>checkmark-vectorManage your team</li>
                      <li>checkmark-vectorStay up to date with trends</li>
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
                  <p className="about_part">
                    We are making scouting in Africa easier. Now you can own
                    your process.
                  </p>
                  <div id="lists">
                    <ul className="list">
                      <li>Access Africa’s talent pool</li>
                      <li>checkmark-vectorRecruit effectively using data</li>
                      <li>checkmark-vectorManage your scouting portfolio</li>
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
      </Layout>
    </Fragment>
  )
}

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

export default IndexPage
