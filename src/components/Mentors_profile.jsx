import React from "react";
import mentor1 from "../img/mentors/mentor1.jpg"; // Jijitha
import mentor2 from "../img/mentors/mentor2.jpg"; // Ancy

export default function Mentors() {
  const mentors = [
    {
      name: "Mrs Jijitha",
      title: "Course Facilitator",
      img: mentor1,
      highlights: [
        "ICSSR Doctoral Scholar, University of Kerala",
        "Double UGC-NET: Education & English",
        "SPARC Fellow – Clarkson University (USA) & Southampton University (UK)",
        "Researcher in Sustainability & Climate Change",
      ],
    },
    {
      name: "Mrs Ancy Angelin",
      title: "Course Facilitator",
      img: mentor2,
      highlights: [
        "Expert in Education & English Literature",
        "Specialized in UGC NET Paper I & II",
        "Simplifies complex concepts with clarity",
        "Focus on academic excellence & personal growth",
      ],
    },
  ];

  return (
    <section style={{ padding: "60px 20px", background: "#f9fafb" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.2rem",
            marginBottom: "40px",
          }}
        >
          Our Mentors
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {mentors.map((mentor, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <img
                src={mentor.img}
                alt={mentor.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ fontSize: "1.3rem", color: "#111827" }}>
                {mentor.name}
              </h3>
              <p style={{ color: "#2563eb", fontWeight: "500", marginBottom: "15px" }}>
                {mentor.title}
              </p>
              <ul
                style={{
                  listStyle: "disc",
                  textAlign: "left",
                  paddingLeft: "20px",
                  color: "#374151",
                  lineHeight: "1.6",
                }}
              >
                {mentor.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
