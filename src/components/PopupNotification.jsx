import React, { useState, useEffect } from "react";
import "./PopupNotification.css";

const PopupNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Automatically show the popup 0.5 seconds after page load
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>📢 UGC NET December 2025 Notification</h3>
        <p>
          The <strong>UGC NET December 2025 Exam</strong> will take place from
          <br />
          <strong>December 31, 2025</strong> to <strong>January 7, 2026</strong>.
        </p>

        <div className="popup-dates">
          <h4>🗓️ Key Dates</h4>
          <ul>
            <li>
              <strong>Registration:</strong> October 7 – November 7, 2025
            </li>
            <li>
              <strong>Application Correction:</strong> November 10 – 12, 2025
            </li>
            <li>
              <strong>Exam Dates:</strong> December 31, 2025 – January 7, 2026
            </li>
          </ul>
        </div>

        <button className="close-btn" onClick={() => setShow(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupNotification;
