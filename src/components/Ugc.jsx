import React, { useState } from "react";
import "./Ugc.css";

import workshopPoster from "../img/workshops/cybersecurity.jpeg";

export default function Ugc() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* =========================================
          TOP ANNOUNCEMENT BAR
      ========================================= */}

      <div className="ugc-container">

        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
        >
          📢{" "}
          <strong>UPCOMING WORKSHOP: CYBER SECURITY</strong>

          &nbsp; | &nbsp;

          🛡️ Become a Certified SOC Analyst

          &nbsp; | &nbsp;

          📅 October 10, 2026

          &nbsp; | &nbsp;

          🕗 8:00 PM

          &nbsp; | &nbsp;

          💻 Online Mode

          &nbsp; | &nbsp;

          <button
            className="ugc-register-link"
            onClick={() => setShowPopup(true)}
          >
            Register Now →
          </button>
        </marquee>

      </div>


      {/* =========================================
          POPUP
      ========================================= */}

      {showPopup && (

        <div
          className="workshop-popup-overlay"
          onClick={() => setShowPopup(false)}
        >

          <div
            className="workshop-popup"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="workshop-popup-close"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
            >
              ×
            </button>


            {/* POSTER */}

            <div className="workshop-popup-image">

              <img
                src={workshopPoster}
                alt="Cyber Security Workshop"
              />

            </div>


            {/* DETAILS */}

            <div className="workshop-popup-content">

              <span className="workshop-popup-label">
                UPCOMING WORKSHOP
              </span>

              <h2>
                Cyber Security
              </h2>

              <h3>
                Become a Certified SOC Analyst
              </h3>

              <p className="workshop-popup-description">
                Start your IT security career with practical
                cybersecurity and SOC monitoring experience.
              </p>


              {/* WORKSHOP DETAILS */}

              <div className="workshop-details">

                <div className="workshop-detail">

                  <span className="detail-icon">
                    📅
                  </span>

                  <div>
                    <small>Date</small>
                    <strong>October 10, 2026</strong>
                  </div>

                </div>


                <div className="workshop-detail">

                  <span className="detail-icon">
                    🕗
                  </span>

                  <div>
                    <small>Time</small>
                    <strong>8:00 PM</strong>
                  </div>

                </div>


                <div className="workshop-detail">

                  <span className="detail-icon">
                    💻
                  </span>

                  <div>
                    <small>Mode</small>
                    <strong>Online</strong>
                  </div>

                </div>


                <div className="workshop-detail">

                  <span className="detail-icon">
                    📞
                  </span>

                  <div>
                    <small>Contact</small>
                    <strong>+91 80860 024 800</strong>
                  </div>

                </div>

              </div>


              {/* HIGHLIGHTS */}

              <div className="workshop-highlights">

                <span>Workshop Highlights</span>

                <ul>
                  <li>Real-Time SOC Monitoring Practice</li>
                  <li>Practical Cybersecurity Training</li>
                  <li>Industry-Oriented Learning</li>
                  <li>Expert-Led Session</li>
                </ul>

              </div>


              {/* REGISTER BUTTON */}

              <a
                href="https://forms.gle/CcPaiJoWxRFHbqeKA"
                target="_blank"
                rel="noopener noreferrer"
                className="workshop-register-btn"
              >
                Register Now
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      )}

    </>
  );
}