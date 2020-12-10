import React from "react";
import { Link } from "gatsby";
import "../assets/about-us.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import line from "../img/straight_line.png";
import noJust from "../img/ampztv_no_just.jpg";
import jabbar from "../img/abdul_jabbar.jpg";
import brenda from "../img/Brenda_Nwagwu.jpg";
import yinka from "../img/Adeyinka_Aderombi.jpg";
import nicole from "../img/Nichole Yembra.jpg";
import ayo from "../img/Alfonso.jpg";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
// import { image1 } from "../img/IMG_9504.jpg";

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="About Us" />

      <div className="abt-hero">
        <div className="ovrlay"></div>
        {/* Caption */}
        <div className="hero-text text-center">
          <h3 className="caro-h3">BRIDGING THE GAP</h3>
          <h2 className="caro-h2">The African Dream</h2>
          <p className="caro-p container-fluid">
            “Every great dream begins with a dreamer”
          </p>
          <span>Harriet Tubman</span>
        </div>
      </div>

      <main className="container">
        <div className="problems text-center m-5">
          <div className="p-2">
            <h4
              style={{
                fontFamily: "font2",
                fontWeight: "900",
                color: "#db9a02",
              }}
            >
              THE PROBLEM
            </h4>
            <p style={{ fontSize: "18px" }}>
              Over 9 million Africans are in modern slavery and sports is one of
              the lures for trafficking. Despite Africa leading in sports
              participation, over 200 million sports talents within a viable age
              bracket, lack access to verified opportunities, seek platforms for
              self-development and are exposed to the risk exploitation
            </p>
          </div>
          <div>
            <img src={line} alt="line" />
          </div>
          <div className="p-2">
            <h4
              style={{
                fontFamily: "font2",
                fontWeight: "900",
                color: "#db9a02",
              }}
            >
              OUR SOLUTION
            </h4>
            <p style={{ fontSize: "18px" }}>
              AMPZ is connecting African sports talents to a world of verified
              opportunities by leveraging on technology. Our platform enables
              talents to profile themselves, log their stats, and share their
              content. With this, verified recruiters all over the world can
              access African talents and make informed decisions using
              comprehensive data.
            </p>
          </div>
        </div>
        {/* <ImageGallery items={images} /> */}
        {/* <div className="vid">
          <iframe
            style={{ margin: "0 auto" }}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            width="50%"
            height="300px"
          ></iframe>
        </div> */}
        {/* Team */}
        <div className="team">
          <div className="text-center m-5">
            <div className="mx-auto gold_test" style={{ fontSize: "18px" }}>
              GAME CHANGERS
            </div>
            <div className="mx-auto white_test">Meet The Champions</div>
          </div>
          <div className="row" style={{ fontSize: "18px" }}>
            <div className="col-sm-6 col-md-4 text-center">
              <img
                src={jabbar}
                alt="team"
                className="team"
                style={{ height: "20vh" }}
              />
              <div className="team-name">Abdul-Jabbal Momoh</div>
              <p>Co-Founder/CEO</p>
            </div>
            <div className="col-sm-6 col-md-4 text-center">
              <img
                src={brenda}
                alt="team"
                className="team"
                style={{ height: "20vh" }}
              />
              <div className="team-name">Brenda Nwagwu</div>
              <p>Co-Founder/CMO</p>
            </div>
            <div className="col-sm-6 col-md-4 text-center">
              <img
                src={ayo}
                alt="team"
                className="team"
                style={{ height: "20vh" }}
              />
              <div className="team-name">Ayooluwa Alfonso</div>
              <p>Engineering Lead</p>
            </div>
            <div className="col-sm-6 col-md-4 text-center">
              <img
                src={yinka}
                alt="team"
                className="team"
                style={{ height: "20vh" }}
              />
              <div className="team-name">Adeyinka Aderombi</div>
              <p>Advisor</p>
            </div>
            <div className="col-sm-6 col-md-4 text-center">
              <img
                src={nicole}
                alt="team"
                className="team"
                style={{ height: "20vh" }}
              />
              <div className="team-name">Nicole Yembra</div>
              <p>Advisor</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
