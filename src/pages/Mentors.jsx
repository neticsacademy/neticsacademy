import React from "react";
import { Link } from "react-router-dom";
import mentor1 from "../img/mentors/mentor1.png";
import mentor2 from "../img/mentors/mentor2.png";
import mentor3 from "../img/mentors/mentor3.png";
import mentor5 from "../img/mentors/mentor5.png";
import mentor6 from "../img/mentors/mentor6.png";
import mentor7 from "../img/mentors/mentor7.png";
import mentor8 from "../img/mentors/mentor8.png";
import mentor9 from "../img/mentors/mentor9.png";
import mentor10 from "../img/mentors/mentor10.png";
import mentor11 from "../img/mentors/mentor11.png";
import mentor12 from "../img/mentors/mentor12.png";
import mentor13 from "../img/mentors/mentor13.png";

import "./Mentors.css";

export default function Mentors() {
  const mentors = [
    { title: "Commerce", img: mentor3 },
    { title: "Commerce", img: mentor7 },
    { title: "Education & English", img: mentor1 },
    { title: "Sociology", img: mentor5 },
    { title: "Education", img: mentor2 },
    { title: "English", img: mentor6 },
    { title: "Law", img: mentor8 },
    { title: "Life Sciences", img: mentor9 },
    { title: "Disaster Management", img: mentor10 },
    { title: "Economics", img: mentor11 },
    { title: "English", img: mentor12 },
    { title: "Sociology", img: mentor13 },
  ];

  return (
    <section className="mentors-section">
      <h2 className="mentors-title">OUR MENTORS</h2>
      <div className="mentors-grid">
        {mentors.map((mentor, i) => (
          <div className="mentor-card" key={i}>
            <div className="mentor-inner">
              {/* FRONT SIDE */}
              <div className="mentor-front">
                <img src={mentor.img} alt={mentor.title} className="mentor-img" />
                <p className="mentor-role">{mentor.title}</p>
              </div>

              {/* BACK SIDE */}
              <div className="mentor-back">
                <h3>{mentor.title}</h3>
                <Link to="/mentors" className="view-profile-btn">
                  View Profile
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}