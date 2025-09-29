import "./Itcourses.css";

function Itcourses() {
  const courses = [
    "CCNA",
    "Cybersecurity",
    "Ethical Hacking",
    "CCNP",
    "Full Stack",
    "Software Testing",
    ".NET",
    "UI/UX",
    "VLSI",
    "Embedded System",
  ];

  return (
    <section className="companies">
      <h2 className="title">Technical courses offered by Netics IT Innovation</h2>
      <br />
      <div className="companies-slider">
        <div className="slider-track">
          {[...courses, ...courses].map((course, index) => (
            <a
              key={index}
              href="https://neticstrainings.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="course-link"
            >
              {course}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Itcourses;