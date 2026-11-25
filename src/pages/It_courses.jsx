import React from "react";
import "./It_courses.css";
import CCNAImage from "../img/courses/ccna.jpeg";
import CCNPImage from "../img/courses/ccnp.jpeg";
import CybersecurityImage from "../img/courses/cybersecurity.jpeg";
import EthicalHackingImage from "../img/courses/ethical-hacking.jpeg";
import AWSImage from "../img/courses/aws.jpeg";
import FullStackImage from "../img/courses/fullstack.jpeg";
import PythonImage from "../img/courses/python.jpeg";
import JavaImage from "../img/courses/java.jpeg";
import SoftwareTestingImage from "../img/courses/software-testing.jpeg";
import PlaywrightImage from "../img/courses/playwright.jpeg";
import UIUXImage from "../img/courses/uiux.jpeg";
import VLSIImage from "../img/courses/vlsi.jpeg";
import EmbeddedImage from "../img/courses/embedded.jpg";
import { Link } from "react-router-dom";
export const courseCategories = [
  {
    title: "NETWORKING & CYBERSECURITY",
    description:
      "Build strong skills in networking, infrastructure, cybersecurity and ethical security practices.",
    courses: [
      {
        name: "CCNA",
        image: CCNAImage,
        description:
          "Learn networking fundamentals, IP addressing, subnetting, routing, switching, VLANs and network troubleshooting.",
        topics: [
          "Networking Fundamentals",
          "Routing & Switching",
          "IP Addressing",
          "Subnetting",
        ],
      },
      {
        name: "CCNP",
        image: CCNPImage,
        description:
          "Develop advanced networking skills covering enterprise networking, routing, switching and troubleshooting.",
        topics: [
          "Advanced Routing",
          "Switching",
          "Enterprise Networking",
          "Troubleshooting",
        ],
      },
      {
        name: "Cybersecurity",
        image: CybersecurityImage,
        description:
          "Understand cybersecurity fundamentals, threats, vulnerabilities, network security and defensive practices.",
        topics: [
          "Network Security",
          "Threats",
          "Vulnerabilities",
          "Security Practices",
        ],
      },
      {
        name: "Ethical Hacking",
        image: EthicalHackingImage,
        description:
          "Learn ethical hacking concepts, vulnerability assessment, penetration testing and security tools.",
        topics: [
          "Penetration Testing",
          "Kali Linux",
          "Vulnerability Assessment",
          "Security Tools",
        ],
      },
    ],
  },

  {
    title: "CLOUD COMPUTING",
    description:
      "Learn cloud technologies and develop practical skills for modern cloud-based infrastructure and applications.",
    courses: [
      {
        name: "AWS",
        image: AWSImage,
        description:
          "Learn Amazon Web Services including cloud infrastructure, storage, networking, security and deployment.",
        topics: [
          "EC2",
          "S3",
          "IAM",
          "VPC",
          "Cloud Deployment",
        ],
      },
    ],
  },

  {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Develop programming and application development skills using industry-relevant technologies.",
    courses: [
      {
        name: "Full Stack",
        image: FullStackImage,
        description:
          "Learn complete web application development from frontend interfaces to backend APIs, databases and deployment.",
        topics: [
          "Frontend",
          "Backend",
          "Database",
          "APIs",
          "Projects",
        ],
      },
      {
        name: "Python",
        image: PythonImage,
        description:
          "Learn Python programming from fundamentals to advanced concepts through practical exercises and projects.",
        topics: [
          "Python Basics",
          "OOP",
          "Functions",
          "Database",
          "Projects",
        ],
      },
      {
        name: "Java",
        image: JavaImage,
        description:
          "Build a strong foundation in Java programming, object-oriented programming and application development.",
        topics: [
          "Core Java",
          "OOP",
          "Collections",
          "Exception Handling",
          "Projects",
        ],
      },
    ],
  },

  {
    title: "SOFTWARE TESTING & AUTOMATION",
    description:
      "Develop professional testing skills using manual testing and modern automation technologies.",
    courses: [
      {
        name: "Software Testing",
        image: SoftwareTestingImage,
        description:
          "Learn manual testing, test case design, defect management, API testing and software testing methodologies.",
        topics: [
          "Manual Testing",
          "Test Cases",
          "Bug Tracking",
          "API Testing",
        ],
      },
      {
        name: "Playwright Automation",
        image: PlaywrightImage,
        description:
          "Learn modern web automation testing using Playwright and build practical automation test scripts.",
        topics: [
          "Playwright",
          "Web Automation",
          "Test Scripts",
          "Automation Framework",
        ],
      },
    ],
  },

  {
    title: "DESIGN & ENGINEERING",
    description:
      "Explore design and engineering technologies used across software, electronics and mechanical industries.",
    courses: [
      {
        name: "UI/UX",
        image: UIUXImage,
        description:
          "Learn user interface and user experience principles to create intuitive and engaging digital products.",
        topics: [
          "UI Design",
          "UX Research",
          "Wireframes",
          "Prototyping",
        ],
      },
      {
        name: "VLSI",
        image: VLSIImage,
        description:
          "Explore VLSI design concepts, digital electronics, semiconductor fundamentals and IC design.",
        topics: [
          "Digital Electronics",
          "VLSI Design",
          "HDL",
          "IC Design",
        ],
      },
      {
        name: "Embedded System",
        image: EmbeddedImage,
        description:
          "Learn embedded systems, microcontrollers, programming, interfacing and practical applications.",
        topics: [
          "Microcontrollers",
          "Embedded C",
          "Sensors",
          "Interfacing",
        ],
      },
    ],
  },
];

export default function ITCourses() {
  return (
    <section className="it-courses-page">

      {/* HERO */}
      <div className="it-courses-hero">
        <div className="it-courses-hero-overlay">

          <div className="it-courses-container">
            <div className="it-courses-hero-content">

              <span className="it-courses-label">
                PROFESSIONAL TRAINING
              </span>

              <h1>
                IT & Technical <span>Courses</span>
              </h1>

              <p>
                Build industry-relevant skills through practical training,
                expert guidance and career-focused learning programs.
              </p>

              <a
                href="#it-course-categories"
                className="it-courses-hero-button"
              >
                Explore Courses
              </a>

            </div>
          </div>

        </div>
      </div>


      {/* INTRO */}
      <div className="it-courses-intro">
        <div className="it-courses-container">

          <span className="it-courses-section-label">
            OUR COURSES
          </span>

          <h2>
            Learn. Practice.{" "}
            <span>Build Your Career.</span>
          </h2>

          <p>
            Explore our professional IT, software, networking,
            cybersecurity, cloud, design and engineering courses
            designed to develop practical and industry-relevant skills.
          </p>

        </div>
      </div>


      {/* CATEGORIES */}
      <div
        className="it-course-categories"
        id="it-course-categories"
      >

        <div className="it-courses-container">

          {courseCategories.map((category, categoryIndex) => (

            <div
              className="it-course-category"
              key={category.title}
            >

              <div className="it-course-category-heading">

                <div>
                  <span className="it-course-category-number">
                    0{categoryIndex + 1}
                  </span>

                  <h2>{category.title}</h2>
                </div>

                <p>{category.description}</p>

              </div>


              <div className="it-course-grid">

                {category.courses.map((course, index) => (

                  <div
                    className="it-course-card"
                    key={course.name}
                  >
                    <div className="it-course-image">
                      <img
                        src={course.image}
                        alt={`${course.name} training`}
                        loading="lazy"
                      />
                    </div>
                    <Link
                      to={`/courses/${course.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/\//g, "-")}`}
                      className="it-course-card"
                      key={course.name}
                    >
                      <div className="it-course-card-top">
                        <span className="it-course-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="it-course-icon">
                          {course.name.charAt(0)}
                        </div>
                      </div>

                      <h3>{course.name}</h3>

                      <p className="it-course-description">
                        {course.description}
                      </p>

                      <div className="it-course-topics">
                        {course.topics.map((topic) => (
                          <span key={topic}>{topic}</span>
                        ))}
                      </div>

                      <div className="it-course-card-footer">
                        <span>
                          View Course Details →
                        </span>
                      </div>
                    </Link>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CTA */}
      <div className="it-courses-cta">

        <div className="it-courses-container">

          <span className="it-courses-section-label">
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to build your <span>future?</span>
          </h2>

          <p>
            Choose the right course for your career goals and start
            developing practical skills with Netics Academy.
          </p>

          <a href="/contact" className="it-courses-cta-button">
            Get Started
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}