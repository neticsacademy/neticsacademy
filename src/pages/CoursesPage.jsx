import React from "react";
import "./CoursePage.css";
import Ugc from "../components/Ugc";

export default function CourseEligibility() {
  return (
     
    <section>
      <div><Ugc/></div> 
      <div className="eligibility-section">
        <div className="shape shape1"></div>
<div className="shape shape2"></div>
<div className="shape shape3"></div>

      <div className="eligibility-container">
        <h2 className="eligibility-title">Everything You Need to Know: <br />
           ELIGIBILITY & RULES</h2>

        {/* Competitive Exams */}
        <h3 className="category-title">Competitive Exams</h3>

        <div className="eligibility-card">
          <h4>UGC NET / JRF</h4>
          <p>
            The UGC NET exam determines eligibility for Assistant Professor and Junior Research Fellowship.
          </p>
          <h5>Eligibility:</h5>
          <ul>
            <li>Master’s degree with minimum 55% marks (50% for reserved categories).</li>
            <li>Final-year postgraduates can also apply.</li>
            <li>Age limit: JRF up to 30 years, no age limit for Assistant Professor.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Two papers (Paper I: General, Paper II: Subject-specific).</li>
            <li>Total exam duration: 3 hours (single session).</li>
            <li>No negative marking.</li>
          </ul>
        </div>

        <div className="eligibility-card">
          <h4>K-SET</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>Master’s degree with at least 55% marks.</li>
            <li>Relaxation for reserved categories as per state norms.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Two papers: General Paper + Subject Paper.</li>
            <li>Objective type questions.</li>
          </ul>
        </div>

        <div className="eligibility-card">
          <h4>CTET</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>Minimum 50% marks in Senior Secondary or equivalent + teacher training diploma.</li>
            <li>B.Ed candidates can also apply.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Two papers: Paper I (Class I–V), Paper II (Class VI–VIII).</li>
            <li>Duration: 2.5 hours each.</li>
          </ul>
        </div>

        <div className="eligibility-card">
          <h4>KTET</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>Senior Secondary / Graduate degree + relevant teacher training qualification.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Different categories (I to IV) based on class levels & subjects.</li>
            <li>Objective type questions.</li>
          </ul>
        </div>

        {/* Language Training */}
        <h3 className="category-title">Language Training</h3>

        <div className="eligibility-card">
          <h4>IELTS</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>No minimum qualification required.</li>
            <li>Recommended for candidates aged 16 and above.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Four modules: Listening, Reading, Writing, Speaking.</li>
            <li>Total duration: 2 hours 45 minutes.</li>
            <li>Scoring scale: 0–9 bands.</li>
          </ul>
        </div>

        <div className="eligibility-card">
          <h4>TOEFL</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>No strict educational requirements.</li>
            <li>Preferred for students applying to universities abroad.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Four sections: Reading, Listening, Speaking, Writing.</li>
            <li>Duration: ~3 hours.</li>
            <li>Score range: 0–120.</li>
          </ul>
        </div>

        <div className="eligibility-card">
          <h4>OET</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>Healthcare professionals (doctors, nurses, etc.).</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Language skills tested in healthcare context.</li>
            <li>Four modules similar to IELTS.</li>
          </ul>
        </div>

        <div className="eligibility-card">
          <h4>PTE</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>No specific qualification required.</li>
            <li>Minimum age: 16 years.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Single 3-hour session on computer.</li>
            <li>Testing English skills in academic & general context.</li>
          </ul>
        </div>

        <div className="eligibility-card">
          <h4>German Language (A1–B2)</h4>
          <h5>Eligibility:</h5>
          <ul>
            <li>No prior German knowledge required for A1.</li>
            <li>Sequential learning up to B2 level.</li>
          </ul>
          <h5>Exam Rules:</h5>
          <ul>
            <li>Tests include Reading, Listening, Writing, and Speaking.</li>
            <li>Certification accepted for academic and professional purposes.</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
