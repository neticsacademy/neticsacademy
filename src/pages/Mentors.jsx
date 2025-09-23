// src/pages/Mentors.js
import React from "react";
import { Link } from "react-router-dom";
import mentor1 from "../img/mentors/mentor1.jpg";
import mentor2 from "../img/mentors/mentor2.jpg";
import mentor3 from "../img/mentors/mentor3.jpg";
import mentor4 from "../img/mentors/mentor4.jpg";
import mentor5 from "../img/mentors/mentor5.png";
import "./Mentors.css";

export default function Mentors() {
  const mentors = [
    { name: "Ms. Ann Susan Thomas", title: "Course Facilitator – Commerce", img: mentor3, route: "/mentors/annsusan" },
    { name: "Ms. Jijitha Gilton", title: "Course Facilitator – Education & English", img: mentor1, route: "/mentors/jijitha" },
    { name: "Ms. Reshma Kishore", title: "Course Facilitator – Economics", img: mentor4, route: "/mentors/reshma" },
    { name: "Ms. Parvathy U", title: "Course Facilitator – Sociology", img: mentor5, route: "/mentors/parvathy" },
    { name: "Ms. Ancy Angelin", title: "Course Facilitator – Education", img: mentor2, route: "/mentors/ancy" },
  ];

  return (
    <section className="mentors-section">
      <h2 className="mentors-title">Our Mentors</h2>
      <div className="mentors-grid">
        {mentors.map((mentor, i) => (
          <div className="mentor-card" key={i}>
            <div className="card-inner">
              {/* FRONT SIDE */}
              <div className="card-front">
                <img src={mentor.img} alt={mentor.name} className="mentor-img" />
                <p className="mentor-role">{mentor.title}</p>
              </div>

              {/* BACK SIDE */}
              <div className="card-back">
                <h3>{mentor.name}</h3>
                <p>{mentor.title}</p>
                <Link to={mentor.route} className="btn-view">
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