import React, { useState, useEffect, Fragment } from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";

import { Card } from "react-bootstrap";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FcSportsMode } from "@react-icons/all-files/fc/FcSportsMode";
import { FaPeopleCarry } from "@react-icons/all-files/fa/FaPeopleCarry";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
// Modals
import TalentModal from "./getStartedModals/talentModalGS";
import FanModal from "./getStartedModals/fanModalGS";
import CoachModal from "./getStartedModals/coachModalGS";
import ScoutModal from "./getStartedModals/scoutModalGS";

const GetStarted = () => {
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
      {/* Form 1 */}
      <TalentModal setFormOne={setFormOne} formOne={formOne} />
      {/* Form 2 */}
      <FanModal setFormTwo={setFormTwo} formTwo={formTwo} />
      {/* Form 3 */}
      <CoachModal setFormThree={setFormThree} formThree={formThree} />
      {/* Form 4 */}
      <ScoutModal setFormFour={setFormFour} formFour={formFour} />

      <Layout>
        <SEO title="Page two" />
        {/* prod */}
        <section
          className="container container-fluid p-4"
          style={{ padding: "70px 0 70px 0" }}
        >
          <div
            className="text-center p-3"
            style={{ padding: "100px 0 30px 0 !important", marginTop: "100px" }}
          >
            <div
              data-aos="fade-down"
              className="mx-auto banner_p_l_r_10"
              style={{ fontWeight: "800", fontSize: "30px" }}
            >
              Select profile
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto gold_test"
            >
              Carefully pick the Profile that best matches you below.
            </div>
          </div>
          <div style={{ color: "#000" }}>
            <div
              className="row d-flex justify-content-center"
              style={{ padding: "0 60px" }}
            >
              {/* Talent  */}
              <div data-aos="flip-down" className="m-3 text-center">
                <Card style={{ width: "19rem", height: "18rem" }}>
                  <Card.Body style={{ marginTop: "25px" }}>
                    <FcSportsMode
                      style={{
                        justifyContent: "center",
                        fontSize: "70px",
                        padding: "5px",
                        marginTop: "7px",
                        color: "#db9a02",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Title
                      style={{
                        fontSize: "30px",
                        fontWeight: "900",
                        paddingTop: "5px",
                      }}
                    >
                      Talent
                    </Card.Title>
                    <Card.Text
                      className="d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      Showcase and apply for opportunities with ease
                      <button
                        className="mt-1"
                        id="btn"
                        onClick={() => setFormOne(true)}
                        variant="primary"
                      >
                        Get Started
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* Fan  */}
              <div data-aos="flip-down" className="m-3 text-center">
                <Card style={{ width: "19rem", height: "18rem" }}>
                  <Card.Body style={{ marginTop: "25px" }}>
                    <FaPeopleCarry
                      style={{
                        justifyContent: "center",
                        fontSize: "70px",
                        padding: "5px",
                        marginTop: "7px",
                        color: "#db9a02",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Title
                      style={{
                        fontSize: "30px",
                        fontWeight: "900",
                        paddingTop: "5px",
                      }}
                    >
                      Fan
                    </Card.Title>
                    <Card.Text
                      className="d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      Connect and enjoy authentic sports content
                      <button
                        className="mt-1"
                        id="btn"
                        onClick={() => setFormOne(true)}
                        variant="primary"
                      >
                        Get Started
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              {/*  */}
              {/* Scout */}
              <div
                data-aos="flip-down"
                data-aos-delay="200"
                className="m-3 text-center"
              >
                <Card style={{ width: "19rem", height: "18rem" }}>
                  <Card.Body style={{ marginTop: "20px" }}>
                    <FaSearch
                      style={{
                        fontSize: "50px",
                        color: "#db9a02",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Title
                      style={{
                        fontSize: "30px",
                        paddingTop: "30px",
                        fontWeight: "900",
                      }}
                    >
                      Scout & Club
                    </Card.Title>
                    <Card.Text
                      className="d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      We are making scouting in Africa easy. Now you can own
                      your process.
                      <button
                        className="mt-2"
                        id="btn"
                        onClick={() => setFormTwo(true)}
                        variant="primary"
                      >
                        Get Started
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* Academy */}
              <div
                data-aos="flip-down"
                data-aos-delay="300"
                className="m-3 text-center"
              >
                <Card style={{ width: "19rem", height: "18rem" }}>
                  <Card.Body style={{ marginTop: "20px" }}>
                    <GiWhistle
                      style={{
                        fontSize: "60px",
                        color: "#db9a02",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Title
                      style={{
                        fontSize: "30px",
                        paddingTop: "20px",
                        fontWeight: "900",
                      }}
                    >
                      Coach & Academy
                    </Card.Title>
                    <Card.Text
                      className="d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      Amplify your reach and organize your dream team.
                      <button
                        className="mt-2"
                        id="btn"
                        onClick={() => setFormTwo(true)}
                        variant="primary"
                      >
                        Get Started
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default GetStarted;
