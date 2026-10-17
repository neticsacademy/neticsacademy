// import React from "react";
// import "./ContactPage.css";
// import Ugc from "../components/Ugc";
// import { FaGlobe, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// function ContactPage() {
//   return (

//     <div className="contact-container">
//       <div><Ugc/></div>
//        <div className="contact-container">
//       <h4 className="contact-subtitle">NEED HELP?</h4>
//       <h2 className="contact-title">GET IN TOUCH WITH US</h2>

//       <div className="contact-grid">
//         <div className="contact-card website">
//           <FaGlobe className="icon" />
//           <h3>Our LinkedIn</h3>
//           <p>
//             <a href="https://www.linkedin.com/in/netics-academy-117a0638" target="_blank" rel="noopener noreferrer">
//               Netics Academy
//             </a>
//           </p>
//         </div>

//         <div className="contact-card phone">
//           <FaPhoneAlt className="icon" />
//           <h3>Call Us On</h3>
//           <p>
//             <a href="tel:+918086024800">+91 80860 24 800</a>
//           </p>
//         </div>

//         <div className="contact-card email">
//           <FaEnvelope className="icon" />
//           <h3>Email Us</h3>
//           <p>
//             <a href="mailto:neticsitinnovations@gmail.com">neticsitinnovations@gmail.com</a>
//           </p>
//         </div>

//         <div className="contact-card location">
//           <FaMapMarkerAlt className="icon" />
//           <h3>Our Location</h3>
//           <p>
//             4th Floor, Bhadra Centre, Kunnapuram Road, Ayurveda College Jn, Trivandrum 695001
//           </p>
//         </div>
//       </div>

//       {/* Google Map */}
//       <div className="map-wrapper">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.951282614079!2d76.95583207448541!3d8.48599619706992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbfb6e35358f%3A0xe79822a0a2ad2ac!2sNetworkz%20Systems!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin"
//           width="100%"
//           height="400"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//     </div>
    
//   );
// }

// export default ContactPage;
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Website Enquiry - ${formData.name}`;

    const body = `
Dear Netics IT Innovations Team,

I would like to make an enquiry through your website.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course of Interest: ${formData.course || "Not specified"}

Message:
${formData.message}

Regards,
${formData.name}
    `.trim();

    const mailtoUrl =
      `mailto:technicalhead.netics@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <main className="nit-contact-page">
      {/* Hero */}
      <section className="nit-contact-hero">
        <div className="nit-contact-hero-glow" />

        <div className="nit-contact-container nit-contact-hero-content">
          <span className="nit-contact-eyebrow">
            WE'RE HERE TO HELP
          </span>

          <h1>
            Let's Start a <span>Conversation</span>
          </h1>

          <p>
            Have questions about our training programs, internships,
            or technical courses? Get in touch with our team.
          </p>

          <div className="nit-contact-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact details and enquiry form */}
      <section className="nit-contact-section">
        <div className="nit-contact-container">
          <div className="nit-contact-layout">

            {/* Contact information */}
            <aside className="nit-contact-info">
              <span className="nit-contact-section-label">
                CONTACT INFORMATION
              </span>

              <h2>
                We'd Love to <span>Hear From You</span>
              </h2>

              <p className="nit-contact-info-intro">
                Reach out to discuss your learning goals, explore our
                programs, or ask us anything about getting started.
              </p>

              <div className="nit-contact-info-list">
                <a
                  className="nit-contact-info-item"
                  href="https://www.google.com/maps/search/?api=1&query=4th+Floor+Bhadra+Centre+Kunnampuram+Road+Ayurveda+College+Junction+Trivandrum+695001"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="nit-contact-icon">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    <strong>Our Office</strong>
                    <small>
                      4th Floor, Bhadra Centre, Kunnampuram Road,
                      Ayurveda College Junction, Trivandrum – 695001,
                      Kerala, India
                    </small>
                  </span>
                </a>

                <a
                  className="nit-contact-info-item"
                  href="tel:+918086002480"
                >
                  <span className="nit-contact-icon">
                    <FaPhoneAlt />
                  </span>
                  <span>
                    <strong>Call Us</strong>
                    <small>+91 80860 24 800</small>
                  </span>
                </a>

                <a
                  className="nit-contact-info-item"
                  href="mailto:neticsitinnovations@gmail.com"
                >
                  <span className="nit-contact-icon">
                    <FaEnvelope />
                  </span>
                  <span>
                    <strong>Email Us</strong>
                    <small>neticsitinnovations@gmail.com</small>
                  </span>
                </a>

                <div className="nit-contact-info-item">
                  <span className="nit-contact-icon">
                    <FaClock />
                  </span>
                  <span>
                    <strong>Working Hours</strong>
                    <small>
                      Contact our team for current office hours and
                      appointment availability.
                    </small>
                  </span>
                </div>
              </div>

              <div className="nit-contact-help-card">
                <FaCode />
                <div>
                  <h3>Ready to Build Your Future?</h3>
                  <p>
                    Tell us what you want to learn. We'll help you
                    explore the right training options.
                  </p>
                </div>
              </div>
            </aside>

            {/* Enquiry form */}
            <div className="nit-contact-form-card">
              <div className="nit-contact-form-heading">
                <span className="nit-contact-section-label">
                  SEND AN ENQUIRY
                </span>

                <h2>How Can We Help You?</h2>

                <p>
                  Fill in your details and share your requirements.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="nit-contact-form-grid">
                  <div className="nit-contact-field">
                    <label htmlFor="contact-name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="nit-contact-field">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="nit-contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      pattern="[+]?[0-9 ()-]{7,18}"
                      title="Enter a valid phone number."
                      required
                    />
                  </div>

                  <div className="nit-contact-field">
                    <label htmlFor="contact-course">
                      Course of Interest
                    </label>
                    <select
                      id="contact-course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option value="">Select a course</option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Full Stack Development">
                        Full Stack Development
                      </option>
                      <option value="Python Programming">
                        Python Programming
                      </option>
                      <option value="Software Testing">
                        Software Testing
                      </option>
                      <option value="Networking">
                        Networking
                      </option>
                      <option value="Cybersecurity">
                        Cybersecurity
                      </option>
                      <option value="Cloud Computing">
                        Cloud Computing
                      </option>
                      <option value="Internship">
                        Internship
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="nit-contact-field nit-contact-field-full">
                    <label htmlFor="contact-message">
                      Your Message <span>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Tell us what you'd like to know..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="nit-contact-submit"
                >
                  Submit Enquiry <FaArrowRight />
                </button>

                <p className="nit-contact-form-note">
                  <FaCheckCircle />
                  Your enquiry will be prepared in your default email app.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="nit-contact-bottom">
        <div className="nit-contact-container nit-contact-bottom-inner">
          <div>
            <h2>
              Your Next Step Starts <span>Here.</span>
            </h2>
            <p>
              Explore our technical training programs and take the next
              step in your learning journey.
            </p>
          </div>

          <Link to="/courses/technical-courses" className="nit-contact-bottom-button">
            Explore Courses <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}