import React from "react";
import "./MentorsPage.css";
import mentor1 from "../img/mentors/mentor1.png";
import mentor2 from "../img/mentors/mentor2.png";
import mentor3 from "../img/mentors/mentor3.png";
import mentor4 from "../img/mentors/mentor4.png";
import mentor5 from "../img/mentors/mentor5.png";
import mentor6 from "../img/mentors/mentor6.png";
import mentor7 from "../img/mentors/mentor7.png";
import mentor8 from "../img/mentors/mentor8.png";
import mentor9 from "../img/mentors/mentor9.png";
import mentor10 from "../img/mentors/mentor10.png";

const mentorsData = [
  {
    id: 3,
    name: "Ms. Ann Susan Thomas",
    title: "Course Facilitator – Commerce",
    image: mentor3,
    details: `Ms. Ann Susan Thomas is a Doctoral Scholar at the Department of Commerce, University of Kerala, specializing in ESG (Environmental, Social, and Governance) investments and sustainable finance. Her research and publications focus on ESG momentum, sustainable finance, and fintech, with papers in Scopus-indexed and ABDC-listed journals, along with presentations at leading international conferences including IIM Shillong, RMIT Vietnam, and the University of Southampton.
She is a recipient of the ASPIRE Research Award and the ICSSR Doctoral Fellowship, and has qualified both UGC-NET and SET. She has served as an Assistant Professor (Guest Lecturer) at St. Dominic’s College, Kottayam, teaching financial markets, taxation, and accounting, in addition to mentoring student research projects and coordinating academic events. Alongside institutional teaching, she has also taken private tuitions, reflecting her passion for guiding learners at different levels.
`
  },
  {
    id: 1,
    name: "Ms. Jijitha Gilton",
    title: "Course Facilitator - Education & English",
    image: mentor1,
    details: `Ms. Jijitha Gilton is a Doctoral Scholar at the Department of Education, University of Kerala focusing upon developing an ecological language Teaching Model. Currently engaged in an International research collaboration as SPARC Fellow with Clarkson University, USA and Southampton University, UK. Holds double UGC-NET qualification in Education as well as English and has a proven track record of scholarly publications and academic presentations in sustainability and climate change. Recipient of research grants including ASPIRE Research Award and Kerala University Student Start-Up grant and experienced English educator with a background in Secondary education and Adult Literacy engagements as part of community service - Aksharashree project by Literacy Mission, Govt. of Kerala.`
  },
  
  {
    id: 4,
    name: "Ms. Reshma Kishore",
    title: "Course Facilitator – Economics",
    image: mentor4,
    details: `Ms. Reshma Kishore is an educator with over seven years of teaching and training experience across higher education and professional skill development. She holds a double Master’s degree—MA in Economics and MA in Educational Leadership—along with an MPhil in Economics and has cleared the UGC-NET in Economics.
Her teaching career includes positions as Assistant Professor in Economics at Kerala Law Academy, Guest Lecturer at SN College, Varkala, and Higher Secondary Teacher with the Kerala Literacy Mission. She has also served as a PDOT Master Trainer with Learnnet Skills Ltd. under the Ministry of External Affairs, Government of India, delivering professional development and orientation training for adult learners. She is also included in the Kerala PSC Assistant Professor rank list in Economics.
`
  },
  {
    id: 5,
    name: "Ms. Parvathy U",
    title: "Course Facilitator - Sociology",
    image: mentor5,
    details: `Ms. Parvathy is an accomplished academician and mentor with a strong record of excellence in Sociology and English Literature. She holds a Double Master's Degree in M.A Sociology and English and an M.Phil. in Sociology and has successfully qualified UGC NET in Sociology twice along with SET in Sociology. She is also a University Third Rank Holder in Sociology. She has also been qualified the UGC NET Ph.D. admission in English, strengthening her academic and research credentials.
With a strong foundation in both Sociology and English, she brings an interdisciplinary perspective to her teaching. In addition to her subject expertise, she is a Soft Skill Trainer, equipping students with essential communication, presentation, and confidence-building skills. At the same time, her school-level tuition and skill training ensure a holistic learning experience, supporting students in both academics and personal development.
Passionate about empowering students, she believes in not only preparing them for competitive exams but also in shaping them into confident scholars ready for research, teaching, and academic excellence.`
  },
  {
    id: 2,
    name: "Ms. Ancy Angelin",
    title: "Course Facilitator – Education",
    image: mentor2,
    details: `Ms. Ancy Angelin is a committed educator with expertise in Education and English Literature, equipping her to guide aspirants effectively in both Paper One and Paper Two of the UGC NET. She is recognized for her ability to simplify complex concepts and present them in ways that are clear, structured, and engaging.
Her approach blends research-based methods with practical insights, helping aspirants prepare confidently. She views teaching as a journey beyond exams, fostering both academic excellence and personal growth.
`
  },
  {
    id: 6,
    name: "Mr.Amaldev S",
    title: "Course Facilitator – Commerce",
    image: mentor6,
    details: `Mr. Amaldev.S, is a Postgraduate in commerce from University of Kerala specialized in finance. Qualified UGC NET exam for pursuing PHD and prepared research paper on the topic "Night Life Tourism for Economic Blooming". Also participated in the pre-conference of 45th All India Accounting Conference & International Seminar on Accounting Education and Research jointly organised by the Indian Accounting Association, Kerala Branch and Department of Commerce, University of Kerala.
`
  },
  {
    id: 7,
    name: "Ms. J S S Devi",
    title: "Course Facilitator – English",
    image: mentor7,
    details: `J S S Devi is a UGC-NET qualified educator and academic mentor specializing in English Literature. A topper during her master’s degree, she combines academic excellence with practical expertise gained through 2 years of dedicated teaching experience as an Assistant Professor (Guest Lecturer). This blend of strong subject knowledge and classroom practice enables her to design highly effective, result-oriented learning strategies for aspirants.
Beyond classroom teaching, she is committed to continuous academic growth, regularly updating her knowledge in literature to bring the latest insights into lectures. She views education as more than just exam preparation—it is about nurturing independent learners, future educators, and researchers who will contribute meaningfully to the academic community. She also has experience as a language trainer.

`
  },
  {
    id: 8,
    name: "Ms. Anusha CM",
    title: "Course Facilitator – Law",
    image: mentor8,
    details: `Ms. Anusha C M is a Law educator who had attained her LL.B Degree from Govt. Law College, Ernakulam under MG University and enrolled as advocate on Bar Council of Kerala & completed her LL.M Degree in International Law from Govt. Law College, Thiruvananthapuram under Kerala University.
Dedicated and experienced Law educator with 10+ years of expertise in teaching and tutoring students of various ages and skill levels. Proven ability to create personalized lesson plans, effectively balance tutoring hours, and maintain strong relationships with students. Adept at using technology to enhance learning experiences and committed to providing high-quality educational support for LL.B, LL.M, KLEE, and UGC NET aspirants.

`
  },
  {
    id: 9,
    name: "Ms. Aditi P Nair",
    title: "Course Facilitator – Life Sciences",
    image: mentor9,
    details: `Aditi P Nair is a recent postgraduate in MSc Molecular Medicine and did her bachelor’s in Zoology. She has a strong academic foundation starting from school days which is reflected in her academic records - from being the school topper during 10th grade to graduating both her bachelor’s and master's degrees with distinction. Her research experience spans microbial techniques, cell culturing, molecular biology, bioinformatics, and animal handling.
Aditi has qualified the CSIR-UGC NET (LS AIR 21, July 2025) and is also GATE 2025 qualified. With her academic excellence, research exposure, and teaching aptitude, she is dedicated to mentoring students for competitive examinations in life sciences, helping them build both conceptual clarity and problem-solving skills.

`
  },
  {
    id: 10,
    name: "Ms. Ardra T S",
    title: "Course Facilitator – Disaster Management",
    image: mentor10,
    details: `Ardra T S is a UGC-NET qualified educator and academic mentor specialising in Disaster Management. A topper during her Master’s program, she exemplifies academic excellence with strong subject knowledge and well-rounded expertise in both UGC NET Paper 1 and Disaster Management.
She adopts a systematic, result-oriented teaching methodology, focused on building clarity, precision, and exam readiness through structured learning practices. By consistently updating her knowledge, she ensures her teaching aligns with evolving academic standards and empowers learners with current, relevant insights.

`
  },
];

export default function MentorsPage() {
  return (
    <section className="mentors-section">
      {/* Floating background shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="mentors-container">
        <h1 className="mentors-title">OUR MENTORS</h1>
        <p className="mentors-description">
          Meet our expert facilitators guiding your journey to success
        </p>

        <div className="mentors-cards">
          {mentorsData.map((mentor, index) => (
            <div
              key={mentor.id}
              className={`mentor-card ${index % 2 === 1 ? "reverse" : ""}`}
            >
              
              <div className="mentor-text">
              <div className="mentor-image-circle">
                <img src={mentor.image} alt={mentor.name} />
              </div>
                <h2>{mentor.name}</h2>
                <h4>{mentor.title}</h4>
                <p>{mentor.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}