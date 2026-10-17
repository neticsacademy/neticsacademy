// import React, { useState } from "react";
// import logo from "../img/logo-bck.png";
// import fac from "../img/communication.png";
// import inst from "../img/instagram.png";
// import linkdn from "../img/linkedin.png";
// import loc from "../img/google-maps.png";
// import "./Footer.css"; 


// function Footer() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const emailBody = `
// Dear Netics Academy Team,

// You have received a new enquiry via the official enquiry form:

// ----------------------------------------
// Full Name: ${formData.name}
// Phone Number: ${formData.phone || "N/A"}
// Message:
// ${formData.message}
// ----------------------------------------

// Kindly respond to the above enquiry at your earliest convenience.

// Best regards,
// Netics Academy Enquiry System
// `;

//     const subject = `Official Enquiry from ${formData.name}`;
//     window.location.href = `mailto:neticsacademy@gmail.com?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(emailBody)}`;

//     // Reset the form
//     setFormData({ name: "", phone: "", message: "" });
//   };

//   return (
//     <footer
//       className="text-white pt-5"
//       style={{ background: "linear-gradient(135deg, #003366, #cc0000)" }}
//     >
//       <div className="container">
//         <div className="row align-items-center mb-5">
//           {/* Left Side - Logo & Contact Info */}
//           <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
//             <img
//               src={logo}
//               alt="Netics Academy"
//               width="150"
//               className="mb-3"
//               style={{ borderRadius: "5px" }}
//             />
//             <h6 className="fw-bold mb-3">Contact Info</h6>
//             <p className="mb-2">
//               <i className="fas fa-map-marker-alt me-2 text-warning"></i>
//               4th Floor, Bhadra Centre, Kunnampuram Road, Ayurveda College Junction,
//               Trivandrum - 695001
//             </p>
//             <p className="mb-2">
//               <i className="fas fa-envelope me-2 text-info"></i>
//               neticsitinnovations@gmail.com
//             </p>
//             <p className="mb-2">
//               <i className="fas fa-phone me-2 text-success"></i>
//               +91 80860 24 800
//             </p>
//           </div>

//           {/* Right Side - Official Enquiry Form */}
//           <div className="col-md-7">
//             <div
//               className="bg-white text-dark p-5 rounded shadow"
//               style={{ maxWidth: "600px", margin: "auto" }}
//             >
//               <h5
//                 className="fw-bold mb-4 text-center"
//                 style={{ color: "#003366" }}
//               >
//                 Enquiry Form
//               </h5>
//               <p className="small text-muted mb-4 text-center">
//                 Please fill in your details and enquiry. Our team will respond promptly.
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label fw-semibold">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     className="form-control"
//                     placeholder="Enter your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="phone" className="form-label fw-semibold">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     id="phone"
//                     maxLength="10"
//                     className="form-control"
//                     placeholder="Enter your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="message" className="form-label fw-semibold">
//                     Enquiry / Message
//                   </label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Write your enquiry here"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="text-center">
//                   <button type="submit" className="btn btn-primary px-5">
//                     Submit Enquiry
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Social & Footer Note */}
//         <div className="text-center">
//           <div className="mb-3">
//        <div className="social-icons">
//   <a href="https://www.facebook.com/share/16GpCYhaW4/" target="_blank" rel="noreferrer">
//     <img className="icon" src={fac} alt="facebook" />
//   </a>
//   <a href="https://www.linkedin.com/in/netics-academy-117a0638" target="_blank" rel="noreferrer">
//    <img className="icon" src={linkdn} alt="linkedin" />
//   </a>
//   <a href="https://www.instagram.com/neticsacademy?igsh=MXRwaTJxOHY4b2cxNg==" target="_blank" rel="noreferrer">
//    <img className="icon" src={inst} alt="instagram" />
//   </a>
//   <a href="https://share.google/aLHWIRA0fSgjT8hFt" target="_blank" rel="noreferrer">
//     <img className="icon" src={loc} alt="G-Map" />
//   </a>
// </div>


//           </div>
//           <small>
//             © 2025 Netics Academy {" "}
//           </small>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="nit-footer">
      <div className="nit-footer-main">
        <div className="nit-footer-container">
          <div className="nit-footer-grid">

            {/* Company */}
            <div className="nit-footer-brand">
              <Link to="/" className="nit-footer-logo">
                <span className="nit-footer-logo-icon">
                  <FaCode />
                </span>
                <span>
                  <strong>NETICS IT INNOVATIONS</strong>
                  <small>Your Code to a Brighter Future</small>
                </span>
              </Link>

              <p>
                Build industry-ready technical skills through practical
                training, real-world projects, and expert guidance.
                Start your journey toward a brighter future in technology.
              </p>

              <div className="nit-footer-socials">
                <a href="https://www.facebook.com/" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/neticstrainings/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a href="https://www.youtube.com/" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="nit-footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/courses">Our Courses</Link></li>
                <li><Link to="/mentors">Our Mentors</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Courses */}
            <div className="nit-footer-column">
              <h3>Our Expertise</h3>
              <ul>
                <li><Link to="/courses"><FaCode /> Software Development</Link></li>
                <li><Link to="/courses"><FaLaptopCode /> Full Stack Development</Link></li>
                <li><Link to="/courses"><FaNetworkWired /> Networking</Link></li>
                <li><Link to="/courses"><FaShieldAlt /> Cyber Security</Link></li>
                <li><Link to="/courses"><FaCloud /> Cloud Computing</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="nit-footer-column nit-footer-contact">
              <h3>Get In Touch</h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Netics+IT+Innovations+Thiruvananthapuram"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt />
                <span>Thiruvananthapuram, Kerala, India</span>
              </a>

              <a href="mailto:neticstrainings@gmail.com">
                <FaEnvelope />
                <span>neticstrainings@gmail.com</span>
              </a>

              <a href="tel:+918086002480">
                <FaPhoneAlt />
                <span>+91 80860 02480</span>
              </a>

              <Link to="/contact" className="nit-footer-cta">
                Get Started <FaArrowRight />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="nit-footer-bottom">
        <div className="nit-footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Netics IT Innovations.
            All rights reserved.
          </p>
          <p>Learn. Build. Innovate. Grow.</p>
        </div>
      </div>
    </footer>
  );
}