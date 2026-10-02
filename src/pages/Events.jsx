import React from "react";
import "./Events.css";

import event1 from "../img/events/event1.jpg";
import event2 from "../img/events/event2.jpg";
import event3 from "../img/events/event3.jpg";
import event4 from "../img/events/event4.jpg";
import event5 from "../img/events/event5.jpg";
import event6 from "../img/events/event6.jpg";
import event7 from "../img/events/event7.jpg";
import event8 from "../img/events/event8.jpg";
import event9 from "../img/events/event9.jpg";
import event10 from "../img/events/event10.jpg";
import event11 from "../img/events/event11.jpg";
import event12 from "../img/events/event12.jpg";
import event13 from "../img/events/event13.jpg";
import event14 from "../img/events/event14.jpg";
import event15 from "../img/events/event15.jpg";
import event16 from "../img/events/event16.jpg";
import event17 from "../img/events/event17.jpg";
import event18 from "../img/events/event18.jpg";
import event19 from "../img/events/event19.jpg";
import event20 from "../img/events/event20.jpg";


const eventPhotos = [
  { image: event1, title: "Training Session", category: "Training" },
  { image: event2, title: "Student Event", category: "Events" },
  { image: event3, title: "Technical Session", category: "Workshop" },
  { image: event4, title: "Student Interaction", category: "Events" },
  { image: event5, title: "Technical Training", category: "Training" },
  { image: event6, title: "Workshop Session", category: "Workshop" },
  { image: event7, title: "Student Activities", category: "Activities" },
  { image: event8, title: "Training Program", category: "Training" },
  { image: event9, title: "Technical Workshop", category: "Workshop" },
  { image: event10, title: "Hands-on Training", category: "Training" },
  { image: event11, title: "Student Gathering", category: "Events" },
  { image: event12, title: "Training Program", category: "Training" },
  { image: event13, title: "Technical Session", category: "Workshop" },
  { image: event14, title: "Student Training", category: "Training" },
  { image: event15, title: "Career Session", category: "Career" },
  { image: event16, title: "Technical Event", category: "Events" },
  { image: event17, title: "Software Testing Training", category: "Training" },
  { image: event18, title: "Industry Visit", category: "Industry" },
  { image: event19, title: "Student Activities", category: "Activities" },
  { image: event20, title: "MoU & Industry Partnership", category: "Industry" },
];


export default function Events() {
  return (
    <main className="events-page">

      {/* HERO */}
      <section className="events-page-hero">
        <div className="events-page-hero-overlay">
          <div className="events-page-container">

            <span className="events-page-label">
              NETICS ACADEMY
            </span>

            <h1>
              Events & <span>Moments</span>
            </h1>

            <p>
              Explore the workshops, training sessions, student activities,
              industry interactions and memorable moments from Netics Academy.
            </p>

          </div>
        </div>
      </section>


      {/* GALLERY */}
      <section className="events-page-gallery">

        <div className="events-page-container">

          <div className="events-page-heading">

            <span>OUR GALLERY</span>

            <h2>
              Moments From <strong>Netics Academy</strong>
            </h2>

            <p>
              A glimpse into our learning experiences, events,
              workshops and student activities.
            </p>

          </div>


          <div className="events-page-grid">

            {eventPhotos.map((event, index) => (
              <div
                className="events-page-card"
                key={index}
              >

                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                />

                <div className="events-page-card-overlay">

                  <div>

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

        </div>

      </section>


      {/* CTA */}
      <section className="events-page-cta">

        <div className="events-page-container">

          <span>BE PART OF OUR JOURNEY</span>

          <h2>
            Learn. Experience. <strong>Achieve.</strong>
          </h2>

          <p>
            Join Netics Academy and become part of our growing
            learning community.
          </p>

          <a
            href="https://forms.gle/CcPaiJoWxRFHbqeKA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Slot
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}