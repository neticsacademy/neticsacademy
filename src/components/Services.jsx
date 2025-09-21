import React from "react";

export default function Services() {
  const services = [
    "UGC NET & JRF Qualified Faculties & Syllabus based materials.",
    "Regular/ Test series & Crash Courses.",
    "Personalised Mentoring.",
    "PYQ Analysis.",
    "Routine Test & Performance Analysis.",
    "Guidance for Research Publications & Presentations.",
    "Guidelines to prepare synopsis.",
    "Assistance for Thesis writing.",
    "Data Analysis assistance.",
    "Activity based Language Training.",
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
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <p style={{ fontSize: "1rem", color: "#374151", lineHeight: "1.6" }}>
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
