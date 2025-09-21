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
        <div className="courses-grids">
          <div className="course-card">
            <FaUniversity className="course-icon" />
            <h4>UGC NET / JRF</h4>
            <p>
              Prepare for Assistant Professor and Research Scholar opportunities
              with expert faculty and study resources.
            </p>
          </div>

          <div className="course-card">
            <FaChalkboardTeacher className="course-icon" />
            <h4>K-SET</h4>
            <p>
              Specialized coaching for Karnataka State Eligibility Test with
              updated syllabus and mock tests.
            </p>
          </div>

          <div className="course-card">
            <FaBookReader className="course-icon" />
            <h4>CTET</h4>
            <p>
              Get ready for Central Teacher Eligibility Test with practice
              sessions and teaching methodology guidance.
            </p>
          </div>

          <div className="course-card">
            <FaSchool className="course-icon" />
            <h4>KTET</h4>
            <p>
              Comprehensive Kerala TET training with focus on pedagogy and
              subject knowledge.
            </p>
          </div>
        </div>

        {/* Language Training */}
        <h3 className="category-title">Language Training</h3>
        <div className="courses-grid">
          <div className="course-card">
            <MdLanguage className="course-icon" />
            <h4>OET</h4>
            <p>
              Occupational English Test preparation tailored for healthcare
              professionals aiming abroad.
            </p>
          </div>

          <div className="course-card">
            <MdLanguage className="course-icon" />
            <h4>PTE</h4>
            <p>
              Pearson Test of English coaching with computer-based practice and
              strategies.
            </p>
          </div>

          <div className="course-card nextline">
            <MdLanguage className="course-icon" />
            <h4>IELTS</h4>
            <p>
              Academic & General IELTS coaching with proven strategies for
              Reading, Writing, Listening & Speaking.
            </p>
          </div>

          <div className="course-card nextline">
            <MdLanguage className="course-icon" />
            <h4>TOEFL</h4>
            <p>
              Structured preparation for TOEFL with practice modules and expert
              guidance.
            </p>
          </div>

          <div className="course-card nextline">
            <MdLanguage className="course-icon" />
            <h4>German (A1–B2)</h4>
            <p>
              Learn German from basics to advanced with interactive sessions and
              cultural insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
