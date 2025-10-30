import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainPage.css";
import { FaChalkboardTeacher, FaGraduationCap, FaLanguage, FaBullseye } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">

          {/* Content (left on desktop, first on mobile) */}
          <div className="col-lg-6 d-flex flex-column justify-content-center px-5 py-5 order-1 order-lg-2 content-col">
            <h2 className="display-5 about-heading">NETICS ACADEMY</h2>
            <p className="about-subtitle mb-4">"Aspirants Become Achievers"</p>
            <p className="text-muted mb-4">
              At <span className="fw-semibold text-primary">NETICS ACADEMY</span>, we are committed to shaping futures through quality education and expert guidance.  
              We specialize in coaching for <span className="fw-bold">UGC|CSIR NET & JRF, C-TET|K-TET, SET & HSST</span> exams.  
              Beyond competitive exams, we also offer <span className="fw-semibold">language training programs </span> 
              to strengthen communication skills and support overall academic and professional growth.
            </p>
            <p className="text-muted mb-4">Our mission is to empower aspirants with knowledge, skills, and confidence to achieve their goals.
               With expert faculty, structured 
              learning methods, and personalized mentoring, Netics Academy ensures that aspirants truly become achievers.</p>

            {/* On mobile: show image here */}
            <div className="mobile-inline-image d-lg-none mb-4">
              <img
                src={require("../img/hero-img.png")}
                alt="Netics Academy"
                className="img-fluid about-hero-img-inline"
              />
            </div>

            {/* Discover More Button */}
            <a href="/about" className="btn btn-primary btn-sm mb-5">Discover More</a>

            {/* After the button, the rest of content (vision, mission, icon cards) */}
            <div className="vision-mission row g-3 mb-4">
              <div className="col-md-6">
                <div className="feature-box shadow-sm text-center p-4">
                  <FaBullseye className="feature-icon text-primary mb-3" size={32} />
                  <h5 className="fw-bold">Vision</h5>
                  <p className="text-muted small">
                    To be a trusted center of excellence that equips learners with 
                    knowledge, skills, and confidence for academic success and professional growth.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box shadow-sm text-center p-4">
                  <FaGraduationCap className="feature-icon text-success mb-3" size={32} />
                  <h5 className="fw-bold">Mission</h5>
                  <p className="text-muted small">
                    To nurture aspirants into accomplished professionals who 
                    contribute meaningfully to academia, society, and the nation.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-6 col-md-6">
                <div className="icon-card shadow-sm text-center p-3">
                  <FaChalkboardTeacher className="icon text-info mb-2" size={28} />
                  <h6 className="mb-0">Expert Faculty</h6>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="icon-card shadow-sm text-center p-3">
                  <FaGraduationCap className="icon text-warning mb-2" size={28} />
                  <h6 className="mb-0">Quality Education</h6>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="icon-card shadow-sm text-center p-3">
                  <FaLanguage className="icon text-danger mb-2" size={28} />
                  <h6 className="mb-0">Language Training</h6>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="icon-card shadow-sm text-center p-3">
                  <FaBullseye className="icon text-primary mb-2" size={28} />
                  <h6 className="mb-0">Mission to Empower</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column (desktop, and hidden on mobile since inline image covers mobile) */}
          <div className="col-lg-6 col-12 about-image-col order-2 order-lg-1 d-none d-lg-block">
            <img
              src={require("../img/hero-img.png")}
              alt="Netics Academy"
              className="img-fluid about-hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;