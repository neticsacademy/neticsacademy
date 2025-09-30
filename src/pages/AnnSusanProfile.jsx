// src/pages/JijithaProfile.js
import React from "react";
import MentorProfile from "./MentorProfile";
import mentor3 from "../img/mentors/mentor3.jpg";

export default function AnnuSusanProfile() {
  const bio = `
  Ms. Ann Susan Thomas is a Doctoral Scholar at the Department of Commerce, University of Kerala, specializing in ESG (Environmental, Social, and Governance) investments and sustainable finance. Her research and publications focus on ESG momentum, sustainable finance, and fintech, with papers in Scopus-indexed and ABDC-listed journals, along with presentations at leading international conferences including IIM Shillong, RMIT Vietnam, and the University of Southampton.
She is a recipient of the ASPIRE Research Award and the ICSSR Doctoral Fellowship, and has qualified both UGC-NET and SET. She has served as an Assistant Professor (Guest Lecturer) at St. Dominic’s College, Kottayam, teaching financial markets, taxation, and accounting, in addition to mentoring student research projects and coordinating academic events. Alongside institutional teaching, she has also taken private tuitions, reflecting her passion for guiding learners at different levels.

  `;

  return (
    <MentorProfile
      name="Ms. Ann Susan Thomas"
      title="Course Facilitator – Commerce"
      img={mentor3}
      bio={bio}
    />
  );
}