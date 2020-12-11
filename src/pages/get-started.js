import React, { useState, useEffect, Fragment } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card, Button, Modal } from "react-bootstrap";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FcSportsMode } from "@react-icons/all-files/fc/FcSportsMode";
import { FaPeopleCarry } from "@react-icons/all-files/fa/FaPeopleCarry";
import "../../node_modules/aos/dist/aos.css";
import AOS from "aos";

const GetStarted = () => {
  const [formOne, setFormOne] = useState(false);
  const [formTwo, setFormTwo] = useState(false);

  const closeForm = () => {
    setFormOne(false);
  };

  const closeForm2 = () => {
    setFormTwo(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Fragment>
      {/* Form 1 */}
      <Modal show={formOne} onHide={() => closeForm()}>
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
              access!
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

      {/* Form 2 */}
      <Modal show={formTwo} onHide={() => closeForm2()}>
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
              access!
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
                  placeholder="Name of academy / organization"
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
        <SEO title="Page two" />
        {/* prod */}
        <section
          className="container container-fluid p-4"
          style={{ padding: "70px 0 70px 0" }}
        >
          <div className="text-center p-3">
            <div
              data-aos="fade-down"
              className="mx-auto banner_p_l_r_10"
              style={{ fontWeight: "800", fontSize: "30px" }}
            >
              Select Profile
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
            <div className="row d-flex justify-content-center">
              {/*  */}
              <div data-aos="flip-down" className="m-3 text-center">
                <Card style={{ width: "19rem", height: "18rem" }}>
                  <Card.Body>
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
                        className="mt-5"
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
              <div
                data-aos="flip-down"
                data-aos-delay="100"
                className="m-3 text-center"
              >
                <Card
                  className="d-flex align-items-center"
                  style={{ width: "19rem", height: "18rem" }}
                >
                  <Card.Body>
                    <FaPeopleCarry
                      style={{
                        justifyContent: "center",
                        fontSize: "70px",
                        padding: "7px",
                        marginTop: "5px",
                        marginBottom: "20px",
                        color: "#db9a02",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Title style={{ fontSize: "30px", fontWeight: "900" }}>
                      Fan
                    </Card.Title>
                    <Card.Text
                      className="d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      <p style={{ paddingBottom: "10px" }}>
                        Connect and enjoy authentic sports content
                      </p>
                      <button
                        className="mt-5"
                        id="btn"
                        onClick={() => setFormOne(true)}
                        variant="primary"
                        style={{
                          marginTop: "10px !important",
                        }}
                      >
                        Get Started
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div
                data-aos="flip-down"
                data-aos-delay="200"
                className="m-3 text-center"
              >
                <Card style={{ width: "19rem", height: "18rem" }}>
                  <Card.Body>
                    <FaSearch
                      style={{
                        fontSize: "50px",
                        // padding: "5px",
                        // marginTop: "10px",
                        color: "#db9a02",
                        margin: "0 auto",
                      }}
                    />
                    <Card.Title
                      style={{
                        fontSize: "30px",
                        // padding: "25px",
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
                        className="mt-5"
                        id="btn"
                        onClick={() => setFormTwo(true)}
                        variant="primary"
                        // style={{ marginBottom: "50px" }}
                      >
                        Get Started
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div
                data-aos="flip-down"
                data-aos-delay="400"
                class="m-3 text-center"
              >
                <Card style={{ width: "19rem", height: "18rem" }}>
                  <GiWhistle
                    style={{
                      fontSize: "70px",
                      // padding: "2px",
                      marginTop: "17px",
                      color: "#db9a02",
                      margin: "0 auto",
                    }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{
                        // padding: "10px",
                        fontWeight: "900",
                        fontSize: "30px",
                      }}
                      className="mt-3"
                    >
                      Coach & Academy
                    </Card.Title>
                    <Card.Text
                      className="d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      Amplify your reach and organize your dream team.
                      <button
                        id="btn"
                        onClick={() => setFormTwo(true)}
                        variant="primary"
                        style={{
                          marginTop: "50px",
                        }}
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
