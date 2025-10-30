import React from "react";
import "./About.css";
import neticsacademy from "../img/logo withoutline.png";
import neticsit from "../img/NETICS ITINNO WITHOUTLINE.png";
import servicesImg from "../img/servicesimg.png";
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaLanguage } from "react-icons/fa";
import Ugc from "../components/Ugc";


function AboutUs() {
  return (
    <>
      <div><Ugc/></div>
    <section className="about-section">
    
      {/* Floating shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          <strong>NETICS</strong> is built on a vision to empower learners and 
          professionals through education and technology. We operate through two 
          dynamic divisions —<strong>NETICS ACADEMY</strong>  and <strong>NETICS IT INNOVATIONS</strong> — each dedicated to excellence in their 
          respective fields.{" "}
        </p>

        <div className="about-cards">
          {/* Academy */}
          <div className="about-card">
            <div className="about-image-circle">
              <img src={neticsacademy} alt="Academy" />
            </div>
            <div className="about-text">
              <h2><i class="fa-solid fa-building"></i> NETICS ACADEMY</h2>
              <p>
              At Netics Academy, we focus on competitive exam coaching and language training programs. 
              With a specialized approach, we prepare aspirants for UGC/CSIR NET
              C-TET|K-TET, SET & HSST examinations, 
              while also offering language training that enhances communication skills and academic growth. 
              Our mission is to guide learners with the right strategies, 
              knowledge, and mentorship to help them achieve academic and professional success.
              </p>
            </div>
          </div>

          {/* IT Innovations */}
          <div className="about-card reverse">
            <div className="about-image-circle">
              <img src={neticsit} alt="IT Innovations" />
            </div>
            <div className="about-text">
              <h2><i class="fa-solid fa-building"></i><a href="https://neticstrainings.com/"> NETICS IT INNOVATION</a></h2>
              <p>
              Our IT division, Netics IT Innovations, is dedicated to technology-driven learning and development.
              We conduct IT-related courses designed to build future-ready skills and also undertake web development projects to support 
              businesses and institutions in the digital space.


              </p>
            </div>
          </div>

          {/* Founders - No Image */}
          <div className="about-card no-image">
            <div className="about-text full-width">
              <h2><i class="fa-solid fa-user-group"></i> OUR FOUNDER</h2>
              <p>
                Netics was founded by <strong>Mr. Sivakumar</strong> and <strong>Mr. Sibi M Raj</strong>, who share a passion for education and technology. With years of experience in the education sector, they envisioned <strong>Netics</strong>  as a platform where{" "}
                ,
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
            <h2 className="services-title">OUR EXPERTISE</h2>
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
                  <p>UGC | CSIR NET & JRF Qualified Faculties & syllabus-based materials</p>
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