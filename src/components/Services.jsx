import React from "react";
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaLanguage } from "react-icons/fa";
import "./Services.css";
import servicesImg from "../img/servicesimg.png";

export default function Services() {
  return (
    <section className="services-section">
       <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
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
  );
}
