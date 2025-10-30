import React from "react";
import "./Landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Ugc from "../components/Ugc";
import img1 from "../img/companies/Carousel1.png";
import img2 from "../img/companies/4carousel.png";
import img3 from "../img/companies/4carousel2.png";

function Landing() {
  return (
    <section id="home">
      <div
        id="landingCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active" data-bs-interval="4000">
            <img src={img1} className="d-block w-100" alt="Ecotourism 1" />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item" data-bs-interval="4000">
            <img src={img2} className="d-block w-100" alt="Ecotourism 2" />
            <div className="carousel-caption">
              <h1>Adventure Awaits You</h1>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item" data-bs-interval="4000">
            <img src={img3} className="d-block w-100" alt="Ecotourism 3" />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#landingCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#landingCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div><Ugc/></div>
    </section>
  );
}

export default Landing;