import React, { useState } from "react";
import logo from "../img/logo-bck.png";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
Dear Netics Academy Team,

You have received a new enquiry via the official enquiry form:

----------------------------------------
Full Name: ${formData.name}
Phone Number: ${formData.phone || "N/A"}
Message:
${formData.message}
----------------------------------------

Kindly respond to the above enquiry at your earliest convenience.

Best regards,
Netics Academy Enquiry System
`;

    const subject = `Official Enquiry from ${formData.name}`;
    window.location.href = `mailto:neticsacadey@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Reset the form
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <footer
      className="text-white pt-5"
      style={{ background: "linear-gradient(135deg, #003366, #cc0000)" }}
    >
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Left Side - Logo & Contact Info */}
          <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
            <img
              src={logo}
              alt="Netics Academy"
              width="150"
              className="mb-3"
              style={{ borderRadius: "5px" }}
            />
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt me-2 text-warning"></i>
              4th Floor, Bhadra Centre, Kunnampuram Road, Ayurveda College Junction,
              Trivandrum - 695001
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope me-2 text-info"></i>
              neticsacademy@gmail.com
            </p>
            <p className="mb-2">
              <i className="fas fa-phone me-2 text-success"></i>
              +91 8086024700
            </p>
          </div>

          {/* Right Side - Official Enquiry Form */}
          <div className="col-md-7">
            <div
              className="bg-white text-dark p-5 rounded shadow"
              style={{ maxWidth: "600px", margin: "auto" }}
            >
              <h5
                className="fw-bold mb-4 text-center"
                style={{ color: "#003366" }}
              >
                Official Enquiry Form
              </h5>
              <p className="small text-muted mb-4 text-center">
                Please fill in your details and enquiry. Our team will respond promptly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    maxLength="10"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Enquiry / Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write your enquiry here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Social & Footer Note */}
        <div className="text-center">
          <div className="mb-3">
            <a href="https://www.facebook.com/share/16GpCYhaW4/" className="text-white me-3 fs-5">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="www.linkedin.com/in/netics-academy-117a0638" className="text-white me-3 fs-5">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/neticsacademy?igsh=MXRwaTJxOHY4b2cxNg==" className="text-white me-3 fs-5">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://share.google/aLHWIRA0fSgjT8hFt" className="text-white fs-5">
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>
          <small>
            © 2025 Netics Academy {" "}
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;