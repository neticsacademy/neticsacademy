import React from "react";
import mentor1 from "../img/mentors/mentor1.png";
import mentor2 from "../img/mentors/mentor2.png";
import mentor3 from "../img/mentors/mentor3.png";
import mentor4 from "../img/mentors/mentor4.png";
import mentor5 from "../img/mentors/mentor5.png";
import "./Mentors.css";

export default function Mentors() {
  const mentors = [
    { title: "Commerce", img: mentor3 },
    { title: "Education & English", img: mentor1 },
    { title: "Economics", img: mentor4 },
    { title: "Sociology", img: mentor5 },
    { title: "Education", img: mentor2 },
  ];

  return (
    <section className="mentors-section">
      <h2 className="mentors-title">OUR MENTORS</h2>
      <div className="mentors-grid">
        {mentors.map((mentor, i) => (
          <div className="mentor-card" key={i}>
            <img src={mentor.img} alt={mentor.title} className="mentor-img" />
            <p className="mentor-role">{mentor.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}