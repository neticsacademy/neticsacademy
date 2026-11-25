
import React from "react";
import { useParams, Link } from "react-router-dom";
import { courseCategories } from "./It_courses";
import "./CourseDetails.css";

export default function CourseDetails() {
  const { slug } = useParams();

  const course = courseCategories
    .flatMap((category) => category.courses)
    .find(
      (item) =>
        item.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-") === slug
    );

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  return (
    <section className="course-details-page">

      {/* HERO */}
      <div className="course-details-hero">
        <div className="course-details-container">
          <span>NETICS IT INNOVATIONS</span>

          <h1>
            {course.name} <span>Course</span>
          </h1>

          <p>{course.description}</p>

          <a href="/contact" className="course-details-button">
            Enquire Now →
          </a>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="course-details-container course-overview">
        <span className="course-details-label">COURSE OVERVIEW</span>

        <h2>About the Course</h2>

        <p>{course.description}</p>

        <p>
          This training program focuses on developing practical,
          industry-relevant knowledge through structured learning
          and technical concepts.
        </p>
      </div>

      {/* CURRICULUM */}
      <div className="course-curriculum">
        <div className="course-details-container">
          <span className="course-details-label">
            WHAT YOU WILL LEARN
          </span>

          <h2>Course Curriculum</h2>

          <div className="course-topic-grid">
            {course.topics.map((topic, index) => (
              <div className="course-topic-card" key={topic}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="course-details-cta">
        <div className="course-details-container">
          <h2>Interested in learning {course.name}?</h2>

          <p>
            Contact our team to know more about the course,
            batch schedules and training details.
          </p>

          <a href="/contact" className="course-details-button">
            Enquire About This Course →
          </a>

          <br />

          <Link to="/courses" className="back-courses">
            ← Explore Other Courses
          </Link>
        </div>
      </div>

    </section>
  );
}
