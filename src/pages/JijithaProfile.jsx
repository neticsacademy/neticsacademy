// src/pages/JijithaProfile.js
import React from "react";
import MentorProfile from "./MentorProfile";
import mentor1 from "../img/mentors/mentor1.jpg";

export default function JijithaProfile() {
  const bio = `
  Ms. Jijitha Gilton is a Doctoral Scholar at the Department of Education,
  University of Kerala focusing upon developing an ecological language Teaching Model.
  Currently engaged in an International research collaboration as SPARC Fellow with
  Clarkson University, USA and Southampton University, UK. Holds double UGC-NET
  qualification in Education as well as English and has a proven track record of
  scholarly publications and academic presentations in sustainability and climate change.
  Recipient of research grants including ASPIRE Research Award and Kerala University
  Student Start-Up grant and experienced English educator with a background in Secondary
  education and Adult Literacy engagements as part of community service - Aksharashree
  project by Literacy Mission, Govt. of Kerala.
  `;

  return (
    <MentorProfile
      name="Ms. Jijitha Gilton"
      title="Course Facilitator – Education & English"
      img={mentor1}
      bio={bio}
    />
  );
}