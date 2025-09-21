import { Link } from "react-router-dom";
import logo from "../img/logo_netics.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container">
        {/* Logo + Moto */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Netics Academy"
            width="80"
            className="me-2"
          />
          <div className="brand-text">
            <span className="academy-name">Netics Academy</span>
            <span className="moto">Aspirants Become Achievers</span>
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/mentors" className="nav-link">Mentors</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link">FAQ</Link>
            </li>
          </ul>

          {/* Register Button */}
          <Link to="/register" className="btn btn-primary register-btn px-4 rounded-pill">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
