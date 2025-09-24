import React from "react";
import "./About.css";
import neticsacademy from "../img/logo withoutline.png"
import neticsit from "../img/innovation.png";

function AboutUs() {
  return (
    <section className="about-section">
      {/* Floating shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          <strong>Netics</strong> empowers learners and professionals through education and technology. 
          We operate through two dynamic divisions — <strong>Netics Academy</strong> and <strong>Netics IT Innovations</strong>.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="about-image-circle">
              <img src={neticsacademy} alt="Academy" />
            </div>
            <div className="about-text">
              <h2>Netics Academy</h2>
              <p>
                Competitive exam coaching for UGC NET, SET, KTET, CTET & language programs. We guide learners to achieve academic and professional success.
              </p>
            </div>
          </div>

          <div className="about-card reverse">
            <div className="about-image-circle">
              <img src={neticsit} alt="IT Innovations" />
            </div>
            <div className="about-text">
              <h2>Netics IT Innovations</h2>
              <p>
                Future-ready IT courses and web development projects to help businesses and institutions grow in the digital space.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-image-circle">
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80" alt="Founders" />
            </div>
            <div className="about-text">
              <h2>Our Founders</h2>
              <p>
                Founded by <strong>Mr. Sivakumar</strong> and <strong>Mr. Sibi M Raj</strong>, a platform where <em>Aspirants Become Achievers</em> and <em>Innovations drive growth</em>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;