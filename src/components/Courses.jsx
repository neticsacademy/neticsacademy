import React from "react";
import "./Courses.css";
import { FaUniversity, FaChalkboardTeacher, FaBookReader, FaSchool } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function Courses() {
  return (
    <section className="courses-section">
      <div className="courses-container">
        <h2 className="courses-title">Our Courses</h2>

        {/* Competitive Exams */}
        <h3 className="category-title">Competitive Exams</h3>
        <div className="courses-grid">
          <div className="course-card exam">
            <FaUniversity className="course-icon" />
            <h4>UGC NET / JRF</h4>
          </div>

          <div className="course-card exam">
            <FaChalkboardTeacher className="course-icon" />
            <h4>K-SET</h4>
          </div>

          <div className="course-card exam">
            <FaBookReader className="course-icon" />
            <h4>CTET</h4>
          </div>

          <div className="course-card exam">
            <FaSchool className="course-icon" />
            <h4>KTET</h4>
          </div>
        </div>

        {/* Language Training */}
        <h3 className="category-title">Language Training</h3>
        <div className="courses-grid">
          <div className="course-card lang">
            <MdLanguage className="course-icon" />
            <h4>OET</h4>
          </div>

          <div className="course-card lang">
            <MdLanguage className="course-icon" />
            <h4>PTE</h4>
          </div>

          <div className="course-card lang">
            <MdLanguage className="course-icon" />
            <h4>IELTS</h4>
          </div>

          <div className="course-card lang">
            <MdLanguage className="course-icon" />
            <h4>TOEFL</h4>
          </div>

          <div className="course-card lang">
            <MdLanguage className="course-icon" />
            <h4>German (A1–B2)</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
