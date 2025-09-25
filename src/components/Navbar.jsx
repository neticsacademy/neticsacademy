import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_netics.png";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top custom-navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo + Moto */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Netics Academy Logo"
            width="80"
            className={`me-2 logo-img ${scrolled ? "scrolled" : ""}`}
          />
          <div className={`brand-text ${scrolled ? "scrolled" : ""}`}>
            <span className="academy-name poppins-bold ">Netics Academy</span>
            <span className="moto poppins-regular">Aspirants Become Achievers</span>
          </div>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${scrolled ? "scrolled" : ""}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${scrolled ? "scrolled" : ""}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className={`nav-link ${scrolled ? "scrolled" : ""}`}>Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/mentors" className={`nav-link ${scrolled ? "scrolled" : ""}`}>Mentors</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${scrolled ? "scrolled" : ""}`}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className={`nav-link ${scrolled ? "scrolled" : ""}`}>FAQ</Link>
            </li>
          </ul>

          <a
  href="https://forms.gle/CcPaiJoWxRFHbqeKA"
  target="_blank"
  rel="noopener noreferrer"
  className={`btn btn-outline-success register-btn px-4 rounded-pill ${
    scrolled ? "scrolled" : ""
  }`}
>
  Book Your Slot Now
</a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;