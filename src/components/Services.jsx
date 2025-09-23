import React from "react";
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaLanguage } from "react-icons/fa";
import "./Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>

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
    </section>
  );
}
