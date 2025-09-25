import React from "react";
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaLanguage } from "react-icons/fa";
import "./Services.css";
import servicesImg from "../img/servicesimg.png" // make sure the path is correct

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Expertise</h2>
        <p className="services-description">
          We Provide Expert Guidance And Personalized Training To Help You Succeed
          In Competitive Exams, Research, And Language Learning.
        </p>

        <div className="services-layout">
          {/* Left Side Image */}
          <div className="services-image">
            <img src={servicesImg} alt="Our Services" />
          </div>

          {/* Right Side Services */}
          <div className="about-services">
            <div className="service-card">
              <FaUsers className="about-icon" />
              <p>UGC NET & JRF Qualified Faculties & syllabus-based materials</p>
            </div>

            <div className="service-card">
              <FaBookOpen className="about-icon" />
              <p>Regular/Test series, Crash Courses, and PYQ Analysis</p>
            </div>

            <div className="service-card">
              <FaChalkboardTeacher className="about-icon" />
              <p>Personalized Mentoring & Routine Performance Analysis</p>
            </div>

            <div className="service-card">
              <FaBookOpen className="about-icon" />
              <p>Guidance for Research, Thesis Writing & Data Analysis</p>
            </div>

            <div className="service-card">
              <FaLanguage className="about-icon" />
              <p>Interactive, Activity-based Language Training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
