import React from "react";
import "./MentorsPage.css";
import mentor1 from "../img/mentors/mentor1.jpg";
import mentor2 from "../img/mentors/mentor2.jpg";
import mentor3 from "../img/mentors/mentor3.jpg";
import mentor4 from "../img/mentors/mentor4.jpg";
import mentor5 from "../img/mentors/mentor5.png";

const mentorsData = [
  {
    id: 1,
    name: "Ms. Jijitha Gilton",
    title: "Course Facilitator - Education & English",
    image: mentor1,
    details: `Ms. Jijitha Gilton is a Doctoral Scholar at the Department of Education, University of Kerala focusing upon developing an ecological language Teaching Model. Currently engaged in an International research collaboration as SPARC Fellow with Clarkson University, USA and Southampton University, UK. 
Holds double UGC-NET qualification in Education as well as English and has a proven track record of scholarly publications and academic presentations in sustainability and climate change. Recipient of research grants including ASPIRE Research Award and Kerala University Student Start-Up grant and experienced English educator with a background in Secondary education and Adult Literacy engagements as part of community service - Aksharashree project by Literacy Mission, Govt. of Kerala.`
  },
  {
    id: 2,
    name: "Ms. Ancy Angelin",
    title: "Course Facilitator – Education",
    image: mentor2,
    details: `Ms. Ancy Angelin is a committed educator with expertise in Education and English Literature, equipping her to guide aspirants effectively in both Paper One and Paper Two of the UGC NET. She is recognized for her ability to simplify complex concepts and present them in ways that are clear, structured, and engaging.
Her approach blends research-based methods with practical insights, helping aspirants prepare confidently. She views teaching as a journey beyond exams, fostering both academic excellence and personal growth.`
  },
  {
    id: 3,
    name: "Ms. Ann Susan Thomas",
    title: "Course Facilitator – Commerce",
    image: mentor3,
    details: `Ms. Ann Susan Thomas is a Doctoral Scholar at the Department of Commerce, University of Kerala, specializing in ESG (Environmental, Social, and Governance) investments and sustainable finance. Her research and publications focus on ESG momentum, sustainable finance, and fintech, with papers in Scopus-indexed and ABDC-listed journals, along with presentations at leading international conferences including IIM Shillong, RMIT Vietnam, and the University of Southampton.
She is a recipient of the ASPIRE Research Award and the ICSSR Doctoral Fellowship, and has qualified both UGC-NET and SET. She has served as an Assistant Professor (Guest Lecturer) at St. Dominic’s College, Kottayam, teaching financial markets, taxation, and accounting, in addition to mentoring student research projects and coordinating academic events. Alongside institutional teaching, she has also taken private tuitions, reflecting her passion for guiding learners at different levels.`
  },
  {
    id: 4,
    name: "Ms. Reshma Kishore",
    title: "Course Facilitator – Economics",
    image: mentor4,
    details: `Ms. Reshma Kishore is an educator with over seven years of teaching and training experience across higher education and professional skill development. She holds a double Master’s degree—MA in Economics and MA in Educational Leadership—along with an MPhil in Economics and has cleared the UGC-NET in Economics.
Her teaching career includes positions as Assistant Professor in Economics at Kerala Law Academy, Guest Lecturer at SN College, Varkala, and Higher Secondary Teacher with the Kerala Literacy Mission. She has also served as a PDOT Master Trainer with Learnnet Skills Ltd. under the Ministry of External Affairs, Government of India, delivering professional development and orientation training for adult learners. She is also included in the Kerala PSC Assistant Professor rank list in Economics.`
  },
  {
    id: 5,
    name: "Ms. Parvathy U",
    title: "Course Facilitator - Sociology",
    image: mentor5,
    details: `Ms. Parvathy is an accomplished academician and mentor with a strong record of excellence in Sociology and English Literature. She holds a Double Master's Degree in M.A Sociology and English and an M.Phil. in Sociology and has successfully qualified UGC NET in Sociology twice along with SET in Sociology. She is also a University Third Rank Holder in Sociology. She has also been qualified the UGC NET Ph.D. admission in English, strengthening her academic and research credentials.
With a strong foundation in both Sociology and English, she brings an interdisciplinary perspective to her teaching. In addition to her subject expertise, she is a Soft Skill Trainer, equipping students with essential communication, presentation, and confidence-building skills. At the same time, her school-level tuition and skill training ensure a holistic learning experience, supporting students in both academics and personal development.
Passionate about empowering students, she believes in not only preparing them for competitive exams but also in shaping them into confident scholars ready for research, teaching, and academic excellence.`
  }
];

export default function MentorsPageFull() {
  return (
    <div className="mentors-full-page">
      <header className="mentors-header">
        <h1>Our Mentors</h1>
        <p>Meet our expert facilitators guiding your journey</p>
      </header>

      <div className="mentors-container">
        {mentorsData.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <img src={mentor.image} alt={mentor.name} className="mentor-photo" />
            <div className="mentor-content">
              <h2 className="mentor-name">{mentor.name}</h2>
              <h4 className="mentor-title">{mentor.title}</h4>
              <p className="mentor-details">{mentor.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
