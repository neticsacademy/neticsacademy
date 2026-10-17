// import React from "react";
// import "./About.css";
// import neticsacademy from "../img/logo withoutline.png";
// import neticsit from "../img/NETICS ITINNO WITHOUTLINE.png";
// import servicesImg from "../img/servicesimg.png";
// import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaLanguage } from "react-icons/fa";
// import Ugc from "../components/Ugc";


// function AboutUs() {
//   return (
//     <>
//       <div><Ugc/></div>
//     <section className="about-section">
    
//       {/* Floating shapes */}
//       <div className="shape shape1"></div>
//       <div className="shape shape2"></div>
//       <div className="shape shape3"></div>

//       <div className="about-container">
//         <h1 className="about-title">About Us</h1>
//         <p className="about-description">
//           <strong>NETICS</strong> is built on a vision to empower learners and 
//           professionals through education and technology. We operate through two 
//           dynamic divisions —<strong>NETICS ACADEMY</strong>  and <strong>NETICS IT INNOVATIONS</strong> — each dedicated to excellence in their 
//           respective fields.{" "}
//         </p>

//         <div className="about-cards">
//           {/* Academy */}
//           <div className="about-card">
//             <div className="about-image-circle">
//               <img src={neticsacademy} alt="Academy" />
//             </div>
//             <div className="about-text">
//               <h2><i class="fa-solid fa-building"></i> NETICS ACADEMY</h2>
//               <p>
//               At Netics Academy, we focus on competitive exam coaching and language training programs. 
//               With a specialized approach, we prepare aspirants for UGC/CSIR NET
//               C-TET|K-TET, SET & HSST examinations, 
//               while also offering language training that enhances communication skills and academic growth. 
//               Our mission is to guide learners with the right strategies, 
//               knowledge, and mentorship to help them achieve academic and professional success.
//               </p>
//             </div>
//           </div>

//           {/* IT Innovations */}
//           <div className="about-card reverse">
//             <div className="about-image-circle">
//               <img src={neticsit} alt="IT Innovations" />
//             </div>
//             <div className="about-text">
//               <h2><i class="fa-solid fa-building"></i><a href="https://neticstrainings.com/"> NETICS IT INNOVATION</a></h2>
//               <p>
//               Our IT division, Netics IT Innovations, is dedicated to technology-driven learning and development.
//               We conduct IT-related courses designed to build future-ready skills and also undertake web development projects to support 
//               businesses and institutions in the digital space.


//               </p>
//             </div>
//           </div>

//           {/* Founders - No Image 
//           <div className="about-card no-image">
//             <div className="about-text full-width">
//               <h2><i class="fa-solid fa-user-group"></i> OUR FOUNDER</h2>
//               <p>
//                 Netics was founded by <strong>Mr. Sivakumar</strong> and <strong>Mr. Sibi M Raj</strong>, who share a passion for education and technology. With years of experience in the education sector, they envisioned <strong>Netics</strong>  as a platform where{" "}
//                 ,
//                 <em>Aspirants Become Achievers</em> and{" "}
//                 <em>Innovations drive growth</em>.
//               </p>
//             </div>
//           </div>
//           */}
//         </div>
//       </div>
//     </section>
//        <section className="services-section about-section">
          
//           <div className="services-container">
//             <h2 className="services-title">OUR EXPERTISE</h2>
//             <p className="services-description">
//               We provide expert guidance and personalized training to help you
//               succeed in <span>Competitive Exams</span>, <span>Research</span>, and
//               <span> Language Learning</span>.
//             </p>
    
//             <div className="services-layout">
//               {/* Left Side Image */}
//               <div className="services-image">
//                 <img src={servicesImg} alt="Our Services" />
//               </div>
    
//               {/* Right Side Services */}
//               <div className="services-grid">
//                 <div className="service-card">
//                   <FaUsers className="service-icon" />
//                   <p>UGC | CSIR NET & JRF Qualified Faculties & syllabus-based materials</p>
//                 </div>
    
//                 <div className="service-card">
//                   <FaBookOpen className="service-icon" />
//                   <p>Regular/Test series, Crash Courses, and PYQ Analysis</p>
//                 </div>
    
//                 <div className="service-card">
//                   <FaChalkboardTeacher className="service-icon" />
//                   <p>Personalized Mentoring & Routine Performance Analysis</p>
//                 </div>
    
//                 <div className="service-card">
//                   <FaBookOpen className="service-icon" />
//                   <p>Guidance for Research, Thesis Writing & Data Analysis</p>
//                 </div>
    
//                 <div className="service-card">
//                   <FaLanguage className="service-icon" />
//                   <p>Interactive, Activity-based Language Training</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//     </>
//   );
// }

// export default AboutUs;
import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import NeticsTraining from "../img/netics-it-training.png";
import client1 from "../img/clients/client-1.png";
import client2 from "../img/clients/client-2.png";
import client3 from "../img/clients/client-3.png";
import client4 from "../img/clients/client-4.png";
import client5 from "../img/clients/client-5.png";
import client6 from "../img/clients/client-6.jpg";
import client7 from "../img/clients/client-7.png";
import client8 from "../img/clients/client-8.png";
import "./About.css";

export default function About() {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      text: "Encouraging creative thinking, modern technologies, and continuous learning.",
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      text: "Building trust through responsible guidance and a commitment to quality.",
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      text: "Learning together through teamwork, mentoring, and practical projects.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Learning",
      text: "Connecting technical concepts with hands-on exercises and real-world applications.",
    },
  ];

  const strengths = [
    "Industry-oriented technical training",
    "Hands-on exercises and project work",
    "Expert guidance and mentorship",
    "Career-focused skill development",
  ];

  return (
    <main className="nit-about-page">
      {/* Page Hero */}
      <section className="nit-about-hero">
        <div className="nit-about-hero-overlay" />
        <div className="nit-about-wrap nit-about-hero-content">
          <span className="nit-about-eyebrow">GET TO KNOW US</span>
          <h1>
            About <span>Netics IT Innovations</span>
          </h1>
          <p>
            Empowering learners with practical technology skills,
            meaningful projects, and a pathway toward a brighter future.
          </p>

          <div className="nit-about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="nit-about-intro">
        <div className="nit-about-wrap nit-about-intro-grid">
          <div className="nit-about-visual">
            <img
              src={NeticsTraining}
              alt="Students learning and collaborating at Netics IT Innovations"
            />

            <div className="nit-about-image-badge">
              <FaCode />
              <div>
                <strong>Learn. Build.</strong>
                <span>Innovate. Grow.</span>
              </div>
            </div>
          </div>

          <div className="nit-about-copy">
            <span className="nit-about-section-label">
              WHO WE ARE
            </span>

            <h2>
              Your Code to a <span>Brighter Future</span>
            </h2>

            <p>
              Netics IT Innovations is focused on helping students,
              graduates, and aspiring IT professionals develop practical
              technical skills for today's technology-driven industry.
            </p>

            <p>
              We believe effective technology education goes beyond
              theory. Through structured learning, hands-on exercises,
              project work, and expert guidance, we help learners build
              confidence and strengthen their technical foundations.
            </p>

            <p>
              Our learning approach covers areas such as software
              development, full-stack technologies, networking,
              cybersecurity, and cloud computing.
            </p>

            <div className="nit-about-strengths">
              {strengths.map((item, index) => (
                <div key={index} className="nit-about-strength">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/courses/technical-courses" className="nit-about-button">
              Explore Our Courses <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="nit-about-purpose">
        <div className="nit-about-wrap">
          <div className="nit-about-heading">
            <span className="nit-about-section-label">
              OUR PURPOSE
            </span>
            <h2>
              Learning With a <span>Clear Direction</span>
            </h2>
            <p>
              Helping learners develop the skills, confidence, and
              practical experience needed to grow in technology.
            </p>
          </div>

          <div className="nit-about-purpose-grid">
            <article className="nit-about-purpose-card">
              <div className="nit-about-purpose-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible, practical, and industry-oriented
                technical training that helps learners strengthen their
                skills, apply their knowledge, and prepare for
                technology-focused opportunities.
              </p>
            </article>

            <article className="nit-about-purpose-card">
              <div className="nit-about-purpose-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To empower a new generation of confident, adaptable,
                and capable technology professionals through continuous
                learning, innovation, and practical skill development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="nit-about-values">
        <div className="nit-about-wrap">
          <div className="nit-about-heading">
            <span className="nit-about-section-label">
              WHAT GUIDES US
            </span>
            <h2>
              Our Core <span>Values</span>
            </h2>
            <p>
              The principles that shape our approach to training,
              mentoring, and learner development.
            </p>
          </div>

          <div className="nit-about-values-grid">
            {values.map((value, index) => (
              <article className="nit-about-value-card" key={index}>
                <div className="nit-about-value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Our Clients & Collaborations */}
<section className="nit-clients">
  <div className="nit-about-wrap">
    <div className="nit-about-heading">
      <span className="nit-about-section-label">
        OUR NETWORK
      </span>

      <h2>
        Our Clients & <span>Collaborations</span>
      </h2>

      <p>
        Proud to connect with institutions and organizations
        through technical training, internships, and industry
        collaboration.
      </p>
    </div>

    <div className="nit-clients-grid">
      <div className="nit-client-logo">
        <img src={client1} alt="Client 1" />
      </div>

      <div className="nit-client-logo">
        <img src={client2} alt="Client 2" />
      </div>

      <div className="nit-client-logo"> 
        <img src={client3} alt="Client 3" />
      </div>

      <div className="nit-client-logo">
        <img src={client4} alt="Client 4" />
      </div>

      <div className="nit-client-logo">
        <img src={client5} alt="Client 5" />
      </div>

      <div className="nit-client-logo">
        <img src={client6} alt="Client 6" />
      </div>
      <div className="nit-client-logo">
        <img src={client7} alt="Client 7" />
      </div>
      <div className="nit-client-logo">
        <img src={client8} alt="Client 6" />
      </div>
    </div>
  </div>
</section>
      {/* Call to Action */}
      <section className="nit-about-cta">
        <div className="nit-about-wrap nit-about-cta-inner">
          <div>
            <span className="nit-about-section-label">
              START YOUR JOURNEY
            </span>
            <h2>
              Ready to Build Your <span>Future in IT?</span>
            </h2>
            <p>
              Explore our training programs and take your next step
              toward developing practical technology skills.
            </p>
          </div>

          <Link to="/contact" className="nit-about-button">
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>

    </main>
  );
}