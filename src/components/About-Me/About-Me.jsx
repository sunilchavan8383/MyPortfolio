import React from "react";
import "./About-Me.css";
import { Link } from "react-router-dom";
import img1 from "./images/img2_me.jpg";
import img2 from "./images/Curious-Minion-Icon.webp";
function Aboutpg1() {
  return (
    <div id="about" className="abt-pg1-Container">
      <section className="services-section">
        <div className="content-wrapper">
          <div className="image-box">
            <img src={img1} alt="Team Working Together" />
          </div>
          <div className="text-content">
            <span className="highlight-text">\ About me \</span>
            <h2 className="main-heading">Hello! I’m Sunil Chavan</h2>
            <p className="info-text">
              Passionate Electronics & Telecommunication Engineer with a strong
              background in Machine Learning, Full-Stack Web Development, and
              IoT. My journey includes developing AI-powered applications,
              IoT-driven automation systems, and intuitive web platforms. I’m
              always open to collaborations, learning new technologies, and
              taking on challenging projects that push the boundaries of
              innovation!
              <br />
              📩 Let’s connect and build something amazing together! 🚀
            </p>

            <div className="advice-container">
              <div className="advice-content">
                <div className="abt-icon">
                  <img src={img2} alt="" />
                </div>
              </div>
              <Link to="about-me">
                <h3 className="abt-title">See More About Me</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutpg1;
