import React from "react";
import "./ContactPage.css";
import Ugc from "../components/Ugc";
import { FaGlobe, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  return (

    <div className="contact-container">
      <div><Ugc/></div>
       <div className="contact-container">
      <h4 className="contact-subtitle">NEED HELP?</h4>
      <h2 className="contact-title">GET IN TOUCH WITH US</h2>

      <div className="contact-grid">
        <div className="contact-card website">
          <FaGlobe className="icon" />
          <h3>Our Website</h3>
          <p>
            <a href="https://www.neticsacademy.com" target="_blank" rel="noopener noreferrer">
              www.neticsacademy.com
            </a>
          </p>
        </div>

        <div className="contact-card phone">
          <FaPhoneAlt className="icon" />
          <h3>Call Us On</h3>
          <p>
            <a href="tel:+918086024700">+91 80860 24700</a>
          </p>
        </div>

        <div className="contact-card email">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p>
            <a href="mailto:neticsacademy@gmail.com">neticsacademy@gmail.com</a>
          </p>
        </div>

        <div className="contact-card location">
          <FaMapMarkerAlt className="icon" />
          <h3>Our Location</h3>
          <p>
            4th Floor, Bhadra Centre, Kunnapuram Road, Ayurveda College Jn, Trivandrum 695001
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-wrapper">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.951282614079!2d76.95583207448541!3d8.48599619706992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbfb6e35358f%3A0xe79822a0a2ad2ac!2sNetworkz%20Systems!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
    
  );
}

export default ContactPage;