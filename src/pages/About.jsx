import React from "react";
import "./About.css";
import neticsacademy from "../img/logo_netics.png";
import neticsit from "../img/innovation.png";
import servicesImg from "../img/servicesimg.png";
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaLanguage } from "react-icons/fa";


function AboutUs() {
  return (
    <>
    <section className="about-section">
      {/* Floating shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          <strong>Netics</strong> empowers learners and professionals through
          education and technology. We operate through two dynamic divisions —{" "}
          <strong>Netics Academy</strong> and{" "}
          <strong>Netics IT Innovations</strong>.
        </p>

        <div className="about-cards">
          {/* Academy */}
          <div className="about-card">
            <div className="about-image-circle">
              <img src={neticsacademy} alt="Academy" />
            </div>
            <div className="about-text">
              <h2><i class="fa-solid fa-building"></i>Netics Academy</h2>
              <p>
                Competitive exam coaching for UGC NET, SET, KTET, CTET &
                language programs. We guide learners to achieve academic and
                professional success.
              </p>
            </div>
          </div>

          {/* IT Innovations */}
          <div className="about-card reverse">
            <div className="about-image-circle">
              <img src={neticsit} alt="IT Innovations" />
            </div>
            <div className="about-text">
              <h2><i class="fa-solid fa-building"></i><a href="https://neticstrainings.com/">Netics IT Innovations</a></h2>
              <p>
                Future-ready IT courses and web development projects to help
                businesses and institutions grow in the digital space.
              </p>
            </div>
          </div>

          {/* Founders - No Image */}
          <div className="about-card no-image">
            <div className="about-text full-width">
              <h2><i class="fa-solid fa-user-group"></i>Our Founders</h2>
              <p>
                Founded by <strong>Mr. Sivakumar</strong> and{" "}
                <strong>Mr. Sibi M Raj</strong>, a platform where{" "}
                <em>Aspirants Become Achievers</em> and{" "}
                <em>Innovations drive growth</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section className="services-section about-section">
          
          <div className="services-container">
            <h2 className="services-title">Our Expertise</h2>
            <p className="services-description">
              We provide expert guidance and personalized training to help you
              succeed in <span>Competitive Exams</span>, <span>Research</span>, and
              <span> Language Learning</span>.
            </p>
    
            <div className="services-layout">
              {/* Left Side Image */}
              <div className="services-image">
                <img src={servicesImg} alt="Our Services" />
              </div>
    
              {/* Right Side Services */}
              <div className="services-grid">
                <div className="service-card">
                  <FaUsers className="service-icon" />
                  <p>UGC NET & JRF Qualified Faculties & syllabus-based materials</p>
                </div>
    
                <div className="service-card">
                  <FaBookOpen className="service-icon" />
                  <p>Regular/Test series, Crash Courses, and PYQ Analysis</p>
                </div>
    
                <div className="service-card">
                  <FaChalkboardTeacher className="service-icon" />
                  <p>Personalized Mentoring & Routine Performance Analysis</p>
                </div>
    
                <div className="service-card">
                  <FaBookOpen className="service-icon" />
                  <p>Guidance for Research, Thesis Writing & Data Analysis</p>
                </div>
    
                <div className="service-card">
                  <FaLanguage className="service-icon" />
                  <p>Interactive, Activity-based Language Training</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default AboutUs;