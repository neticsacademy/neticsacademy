import React from "react";
import "./EventGallery.css";

import event1 from "../img/events/event1.jpg";
import event2 from "../img/events/event2.jpg";
import event3 from "../img/events/event3.jpg";
import event4 from "../img/events/event4.jpg";
import event5 from "../img/events/event5.jpg";
import event6 from "../img/events/event6.jpg";

const events = [
  {
    image: event1,
    title: "Technical Workshop",
    category: "Workshop",
  },
  {
    image: event2,
    title: "Student Training Session",
    category: "Training",
  },
  {
    image: event3,
    title: "Career Guidance Program",
    category: "Career",
  },
  {
    image: event4,
    title: "Industry Interaction",
    category: "Industry",
  },
  {
    image: event5,
    title: "Hands-on Training",
    category: "Training",
  },
  {
    image: event6,
    title: "Netics Academy Events",
    category: "Events",
  },
];

export default function EventGallery() {
  return (
    <section className="events-gallery-section">

      <div className="events-gallery-container">

        {/* Section Heading */}
        <div className="events-gallery-heading">

          <span className="events-gallery-label">
            OUR EVENTS
          </span>

          <h2>
            Moments That <span>Inspire</span>
          </h2>

          <p>
            Explore moments from our workshops, training sessions,
            student activities, industry interactions and events at
            Netics Academy.
          </p>

        </div>


        {/* Gallery */}
        <div className="events-gallery-grid">

          {events.map((event, index) => (
            <div
              className={`event-gallery-card event-card-${index + 1}`}
              key={index}
            >

              <img
                src={event.image}
                alt={event.title}
              />

              <div className="event-gallery-overlay">

                <div className="event-gallery-info">

                  <span>
                    {event.category}
                  </span>

                  <h3>
                    {event.title}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* Button */}
        <div className="events-gallery-button-wrapper">

          <a
            href="/events"
            className="events-gallery-button"
          >
            View All Photos
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}