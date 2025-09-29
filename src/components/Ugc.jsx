import React from "react";
import "./Ugc.css";

export default function Ugc() {
  return (
    <div className="ugc-container">
      <marquee behavior="scroll" direction="left" scrollamount="6">
        📢 <strong>UGC-NET 2025 Admissions Open!</strong> | 
        Learn from <strong>UGC NET & JRF Qualified Mentors</strong> | 
        Access <strong>Crash Courses</strong> | Contact Us Now: <strong>8086024-700</strong> | 
        Limited Seats → <span style={{ color: "#ffdf00" }}>Enroll Now!</span>
      </marquee>
    </div>
  );
}
