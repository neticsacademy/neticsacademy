import React from "react";
import "./About.css";
import Services from "../components/Services";
import { FaChalkboardTeacher, FaBookOpen, FaLanguage, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Netics Academy</h2>
        <p className="about-intro">
          <strong>Netics Academy</strong> is the newest initiative by{" "}
          <a
            href="https://neticstrainings.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Netics Trainings
          </a>{" "}
          — dedicated to shaping <span className="highlight">Aspirants into Achievers</span>.
          We provide specialized courses and personalized mentoring to help students excel
          in competitive exams and master language skills for global opportunities.
        </p>

        {/* Courses Section */}
        <h3 className="sub-title">Our Courses</h3>
        <div className="about-grid">
          <div className="about-card">
            <FaChalkboardTeacher className="about-icon" />
            <h4>Competitive Exams</h4>
            <ul>
              <li>UGC NET / JRF</li>
              <li>K-SET</li>
              <li>CTET</li>
              <li>KTET</li>
            </ul>
          </div>

          <div className="about-card">
            <FaLanguage className="about-icon" />
            <h4>Language Training</h4>
            <ul>
              <li>OET</li>
              <li>PTE</li>
              <li>IELTS</li>
              <li>TOEFL</li>
              <li>German – A1 to B2</li>
            </ul>
          </div>
        </div>
     <Services/>
      </div>
    </section>
  );
}
