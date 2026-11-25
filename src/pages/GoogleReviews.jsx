
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GoogleReviews.css";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Networkz%20Systems%20Trivandrum";

const reviews = [
  {
    name: "Ahin Ahin",
    course: "Cybersecurity",
    date: "5 weeks ago",
    rating: 5,
    text: "My internship at Networkz Systems in Cybersecurity was a valuable learning experience. It helped me understand cybersecurity fundamentals, network security, and common cyber threats. The training improved my technical knowledge and practical skills, providing useful insights into the cybersecurity field.",
  },
  {
    name: "Muhsina.A Muhsina.A",
    course: "Software Testing",
    date: "24 weeks ago",
    rating: 5,
    text: "I completed the Software Testing course, and it was a very good learning experience after my Engineering studies. The classes were excellent and explained in a clear and understandable way. The faculty members were very friendly, supportive, and always motivated us throughout the learning process.",
  },
  {
    name: "Muhfina.A Muhfina.A",
    course: "Software Testing",
    date: "24 weeks ago",
    rating: 5,
    text: "As a software student, I found the Software Testing class to be very useful and practical. It helped me understand that developing software is not just about coding, but also about ensuring the quality and reliability of the product. I am grateful for the support and guidance throughout the course.",
  },
  {
    name: "Abdulla N",
    course: "Digital Marketing",
    date: "25 weeks ago",
    rating: 5,
    text: "I am currently studying the Digital Marketing course at Networkz Systems, and my experience has been excellent so far. The trainers are knowledgeable, supportive, and explain concepts in a simple and practical way. The course covers SEO, social media marketing, Google Ads, and analytics with hands-on learning.",
  },
  {
    name: "Keerthana Nesaiyan",
    course: "Cybersecurity",
    date: "5 weeks ago",
    rating: 5,
    text: "The Cyber Security internship was informative and useful. I learned the basics of cyber security, common cyber threats, and methods to protect data and computer systems. It was a good learning experience that improved my technical knowledge.",
  },
  {
    name: "Shehin Seyad",
    course: "Software Testing",
    date: "24 weeks ago",
    rating: 5,
    text: "I successfully completed my Software Testing internship at Networkz Systems. The internship provided valuable hands-on experience in manual testing, test case preparation, bug identification, and software quality assurance processes. Working on practical projects helped me improve my analytical thinking and problem-solving abilities.",
  },
  {
    name: "Sivani V",
    course: "AI & Embedded Systems",
    date: "21 weeks ago",
    rating: 5,
    text: "It was a wonderful and meaningful class. The faculties who teach are very nice and kind to us. We had completed a 2 weeks internship on AI and Embedded Systems.",
  },
  {
    name: "Ambadi6002",
    course: "Python Full Stack",
    date: "25 weeks ago",
    rating: 5,
    text: "I recently completed the Python Full Stack internship at Networkz Systems, Trivandrum, and it was an excellent experience. The training was well-structured, practical, and easy to follow.",
  },
  {
    name: "Infant Lunas",
    course: "Python Full Stack",
    date: "47 weeks ago",
    rating: 5,
    text: "The Python Full Stack internship was an excellent experience. Special thanks to trainer Karunya Mam, who explained every concept clearly and supported us throughout the sessions. The practical sessions helped me gain confidence in writing Python programs.",
  },
  {
    name: "harryjosh 13c",
    course: "Embedded Systems",
    date: "21 weeks ago",
    rating: 5,
    text: "We completed our Embedded Systems internship at this company. It was a great experience, and they explained every concept in a clear and understandable way.",
  },
  {
    name: "J.R.k",
    course: "Java Full Stack",
    date: "23 Nov 2025",
    rating: 5,
    text: "I successfully completed the Java Full Stack course at NetICS IT Innovations. My mentor Dohna A S explained every topic clearly and supported me throughout the training with practical examples and projects. The classes were easy to follow, and the institute provided a positive environment to grow my skills.",
  },
  {
    name: "Anjana Satheesh",
    course: "AI & Embedded Systems",
    date: "21 weeks ago",
    rating: 5,
    text: "This class was very good. I completed a 2 weeks internship on AI and Embedded Systems. It was useful and more informative.",
  },
  {
    name: "Surya M",
    course: "Web Development",
    date: "19 weeks ago",
    rating: 5,
    text: "I have successfully completed a one-month internship in Web Development (React, Node) at Networkz Systems, Thiruvananthapuram. It is very useful.",
  },
  {
    name: "Vishnu S Kumar",
    course: "Java Full Stack",
    date: "23 Nov 2025",
    rating: 5,
    text: "I recently completed the Java Full Stack course at NETICS IT Innovations. The training was well-structured, practical, and delivered with great clarity by my mentor Dohna A S. The institute provided strong support through hands-on projects, interview preparation, and a friendly learning environment.",
  },
  {
    name: "Aravind Ar",
    course: "CCNA",
    date: "41 weeks ago",
    rating: 5,
    text: "I had a really great experience at Networkz Systems Trivandrum. I studied CCNA and it was an excellent learning experience. The training was well structured, fully practical, and delivered with great clarity by my mentor Akash Sir.",
  },
  {
    name: "v.gokul Velu",
    course: "Java Full Stack",
    date: "6 Apr 2025",
    rating: 5,
    text: "I had a really great experience in Networkz System on my Java Full Stack course. Khalid and Dohna Mam explained every concept clearly. Overall, I would highly recommend this class to anyone looking to strengthen their understanding and gain confidence in my domain. Thank you for making learning so enjoyable and effective!",
  },
  {
    name: "Dariha Suresh",
    course: "Python Full Stack",
    date: "22 Sept 2025",
    rating: 5,
    text: "Currently enrolled in the Python Full Stack course on Networkz Systems. The training is very practical. Instructors explain concepts clearly and the hands-on labs make it easy to understand.",
  },
  {
    name: "RajiMol JC",
    course: "Python Full Stack",
    date: "18 Mar 2025",
    rating: 5,
    text: "I had a great experience with the Python Fullstack course at Networkz Systems. The instructors were very knowledgeable, and the course covered everything I needed to get started with full-stack development. Highly recommend it!",
  },
  {
    name: "Elisha Darwin",
    course: "Automation Testing",
    date: "19 Sept 2025",
    rating: 5,
    text: "I recently completed the Automation Testing course at Networkz Systems and had a great learning experience. The trainers explained concepts clearly with practical examples, and the sessions were very interactive.",
  },
  {
    name: "Devika Nandana",
    course: "VLSI",
    date: "22 Mar 2025",
    rating: 5,
    text: "I'm currently pursuing VLSI course at Networkz System, and the experience has been amazing! The institute provides a friendly and supportive learning environment with excellent teaching staff who ensure clear understanding through practical applications. The hands-on training and real-world project exposure have greatly enhanced my technical skills.",
  },
  {
    name: "Adithya Krishna S",
    course: "Python Full Stack",
    date: "19 Aug 2023",
    rating: 5,
    text: "I recently completed the Python Full Stack workshop, and it was an exceptional learning experience. The course content was well-structured, comprehensive, and engaging. The instructors provided clear explanations and practical examples, making even the most complex concepts easy to understand.",
  },
  {
    name: "Anshad Mohammed",
    course: "Python Full Stack",
    date: "25 Jan 2025",
    rating: 5,
    text: "Great experience with the Python Full-Stack course at NETWORKZ SYSTEMS. The curriculum was comprehensive, the instructors were supportive, and hands-on projects helped me gain practical skills.",
  },
  {
    name: "Sarthaj Sarthaj",
    course: "Embedded Systems",
    date: "44 weeks ago",
    rating: 5,
    text: "We attended the Embedded Systems internship at Networkz Systems Trivandrum. It was very good and helpful. The work environment was friendly and supportive. Special thanks to Mahadevan Sir.",
  },
  {
    name: "Anu CS",
    course: "CCNA",
    date: "3 Feb 2024",
    rating: 5,
    text: "I completed CCNA course at Networkz Systems Kesavadasapuram. The classes were really good and thanks to their placement support, I landed on a job as a network engineer at Kerala Vision Broadband Pvt Ltd. I am completely satisfied with their customer service.",
  },
  {
    name: "Salmanul Faris",
    course: "Python Full Stack",
    date: "20 Nov 2023",
    rating: 5,
    text: "I am a student of Python Full Stack in this institute. Good teachers, they help us to improve our skills. Good assistance for a better job in the IT field. Good support for a better career.",
  },
];

const categories = [
  "All",
  ...new Set(reviews.map((review) => review.course)),
];

function GoogleStars({ rating }) {
  return (
    <div className="gr-stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
    </div>
  );
}

export default function GoogleReviews() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredReviews =
    activeCategory === "All"
      ? reviews
      : reviews.filter((review) => review.course === activeCategory);

  const displayedReviews = showAll
    ? filteredReviews
    : filteredReviews.slice(0, 9);

  return (
    <main className="gr-page">

      {/* HERO */}
      <section className="gr-hero">
        <div className="gr-container">
          <span className="gr-eyebrow">STUDENT EXPERIENCES</span>

          <h1>
            Real Stories. <span>Real Experiences.</span>
          </h1>

          <p>
            Discover what students say about their learning experiences
            at Networkz Systems, Trivandrum.
          </p>

          <div className="gr-rating-summary">
            <div className="gr-google-mark">G</div>
            <div>
              <div className="gr-rating-line">
                <strong>4.8</strong>
                <GoogleStars rating={5} />
              </div>
              <span>447 Google reviews</span>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gr-primary-button"
          >
            Read All Reviews on Google ↗
          </a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="gr-reviews-section">
        <div className="gr-container">

          <div className="gr-section-heading">
            <span className="gr-eyebrow">WHAT OUR LEARNERS SAY</span>
            <h2>Student Testimonials</h2>
            <p>
              Genuine feedback shared by students and learners
              of Networkz Systems.
            </p>
          </div>

          {/* FILTERS */}
          <div className="gr-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "gr-filter active"
                    : "gr-filter"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* REVIEW GRID */}
          <div className="gr-grid">
            {displayedReviews.map((review, index) => (
              <article
                className="gr-card"
                key={`${review.name}-${index}`}
              >
                <div className="gr-card-top">
                  <div className="gr-avatar">
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="gr-reviewer">
                    <h3>{review.name}</h3>
                    <span>Google reviewer</span>
                  </div>

                  <span className="gr-google-g">G</span>
                </div>

                <div className="gr-card-rating">
                  <GoogleStars rating={review.rating} />
                  <span>{review.date}</span>
                </div>

                <span className="gr-course-tag">
                  {review.course}
                </span>

                <p className="gr-review-text">
                  {review.text}
                </p>

                <div className="gr-card-footer">
                  <span>
                    <span className="gr-google-small">G</span>
                    Google Review
                  </span>

                  <span className="gr-verified-label">
                    Student feedback
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <p className="gr-empty">
              No reviews found for this category.
            </p>
          )}

          {filteredReviews.length > 9 && (
            <div className="gr-load-more">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less ↑" : "View More Reviews ↓"}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* GOOGLE CTA */}
      <section className="gr-cta">
        <div className="gr-container">
          <span className="gr-eyebrow">YOUR EXPERIENCE MATTERS</span>
          <h2>Want to know more about us?</h2>
          <p>
            Explore our Google Business Profile to read more
            experiences shared by students and learners.
          </p>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gr-primary-button"
          >
            Explore Google Reviews ↗
          </a>

          <div>
            <Link to="/courses" className="gr-back-link">
              Explore Our Courses →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}