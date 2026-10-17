import React from "react";
import {
  FaCode,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaLaptopCode,
  FaProjectDiagram,
  FaCertificate,
  FaUserTie,
  FaChalkboardTeacher,
  FaUsers,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import Neticsittraining from "../img/netics-it-training.png";
import "./NeticsIT.css";

export default function NeticsIT() {
  const technicalAreas = [
    {
      icon: <FaCode />,
      title: "Software Development",
      text: "Build strong programming and software development skills through practical, industry oriented training.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      text: "Learn frontend, backend, databases and modern development tools by building real world applications.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking",
      text: "Develop networking fundamentals, infrastructure knowledge and professional networking skills.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      text: "Learn cybersecurity concepts, security practices, vulnerability assessment and defensive techniques.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      text: "Explore cloud technologies, deployment concepts and practical cloud based solutions.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Emerging Technologies",
      text: "Stay connected with modern technologies through workshops, projects and hands on technical sessions.",
    },
  ];

  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert-Led Training",
      text: "Learn from trainers with practical technical experience.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Learning",
      text: "Focus on hands on sessions, tools, projects and implementation.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Real-World Projects",
      text: "Apply your knowledge by working on practical development and technology projects.",
    },
    {
      icon: <FaCertificate />,
      title: "Certification Support",
      text: "Get guidance for relevant professional certifications and career development.",
    },
    {
      icon: <FaUsers />,
      title: "Workshops & Internships",
      text: "Participate in workshops, internships and industry oriented learning opportunities.",
    },
    {
      icon: <FaUserTie />,
      title: "Career Development",
      text: "Develop technical and professional skills needed to progress in the IT industry.",
    },
  ];

  return (
    <div className="netics-it-page">

      {/* ================= HERO ================= */}
      <section className="nit-hero">
        <div className="nit-hero-overlay"></div>

        <div className="nit-container nit-hero-content">
          <div className="nit-hero-text">

            <span className="nit-small-title">
              NETICS IT INNOVATIONS
            </span>

            <h1>
              Your Code.
              <br />
              <span>Your Career.</span>
              <br />
              Your Future.
            </h1>

            <p>
              Build industry ready technical skills through practical
              training, real world projects and expert guidance.
            </p>

            <div className="nit-hero-buttons">
              <a href="#technical-training" className="nit-btn nit-btn-primary">
                Explore Training
                <FaArrowRight />
              </a>

              <a href="#contact" className="nit-btn nit-btn-outline">
                Get Started
              </a>
            </div>

            <div className="nit-hero-points">
              <span>✓ Practical Training</span>
              <span>✓ Expert Mentors</span>
              <span>✓ Career Focused</span>
            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="nit-about">
        <div className="nit-container nit-about-grid">

          <div className="nit-about-image">
            <div className="nit-image-card">
              <img
                src={Neticsittraining}
                alt="Netics IT Innovations Training"
              />
            </div>

            <div className="nit-experience-card">
              <strong>IT</strong>
              <span>Training & Innovation</span>
            </div>
          </div>

          <div className="nit-about-content">

            <span className="nit-section-label">
              ABOUT NETICS IT INNOVATIONS
            </span>

            <h2>
              Empowering Learners With
              <span> Industry-Ready IT Skills</span>
            </h2>

            <p>
              NETICS IT Innovations is focused on helping students,
              graduates and aspiring IT professionals develop practical
              technical skills for today's technology driven industry.
            </p>

            <p>
              Our approach combines structured learning with practical
              implementation, projects, workshops and technical guidance
              so that learners can move beyond theory and gain experience
              with real-world technologies.
            </p>

            <div className="nit-about-highlights">

              <div>
                <FaCode />
                <span>Technical Training</span>
              </div>

              <div>
                <FaProjectDiagram />
                <span>Practical Projects</span>
              </div>

              <div>
                <FaUsers />
                <span>Industry Exposure</span>
              </div>

              <div>
                <FaBriefcase />
                <span>Career Development</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= TRAINING AREAS ================= */}
      <section
        className="nit-training"
        id="technical-training"
      >
        <div className="nit-container">

          <div className="nit-section-heading">

            <span className="nit-section-label">
              OUR EXPERTISE
            </span>

            <h2>
              Technical Training
              <span> That Builds Careers</span>
            </h2>

            <p>
              Explore technology focused learning paths designed to
              strengthen your technical foundation and practical skills.
            </p>

          </div>


          <div className="nit-training-grid">

            {technicalAreas.map((item, index) => (
              <div className="nit-training-card" key={index}>

                <div className="nit-card-icon">
                  {item.icon}
                </div>

                <span className="nit-card-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <a href="/courses/technical-courses" className="nit-card-link">
                  Learn More
                  <FaArrowRight />
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= WHY NETICS ================= */}
      <section className="nit-why">

        <div className="nit-container">

          <div className="nit-section-heading">

            <span className="nit-section-label">
              WHY NETICS IT INNOVATIONS
            </span>

            <h2>
              Learn.
              <span> Build. </span>
              Grow.
            </h2>

            <p>
              Our learning approach focuses on practical knowledge,
              technical confidence and career development.
            </p>

          </div>


          <div className="nit-features-grid">

            {features.map((item, index) => (
              <div className="nit-feature-card" key={index}>

                <div className="nit-feature-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CAREER SECTION ================= */}
      <section className="nit-career">

        <div className="nit-container">

          <div className="nit-career-box">

            <div className="nit-career-content">

              <span className="nit-section-label">
                BUILD YOUR FUTURE
              </span>

              <h2>
                Turn Your Technical Skills
                <br />
                Into Career Opportunities.
              </h2>

              <p>
                Start learning technologies that can help you build
                projects, strengthen your portfolio and prepare for
                opportunities in the IT industry.
              </p>

              <a
                href="/courses/technical-courses"
                className="nit-btn nit-btn-primary"
              >
                Explore Our Courses
                <FaArrowRight />
              </a>

            </div>

            <div className="nit-career-shapes">
              <div className="nit-circle circle-one"></div>
              <div className="nit-circle circle-two"></div>
              <FaLaptopCode className="nit-career-icon" />
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT CTA ================= */}
      <section className="nit-contact" id="contact">

        <div className="nit-container">

          <div className="nit-contact-content">

            <span className="nit-section-label">
              START YOUR JOURNEY
            </span>

            <h2>
              Ready to Build Your
              <span> IT Career?</span>
            </h2>

            <p>
              Talk to our team and find the right technical learning
              path for your career goals.
            </p>

            <div className="nit-contact-buttons">

              <a
                href="https://forms.gle/74Lx9UeXsCbUXNfr9"
                target="_blank"
                rel="noopener noreferrer"
                className="nit-btn nit-btn-primary"
              >
                Book Your Slot
                <FaArrowRight />
              </a>

              <a
                href="mailto:neticsitinnovations@gmail.com"
                className="nit-btn nit-btn-dark"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}