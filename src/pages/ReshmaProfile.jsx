// src/pages/JijithaProfile.js
import React from "react";
import MentorProfile from "./MentorProfile";
import mentor4 from "../img/mentors/mentor4.jpg";

export default function ReshmaProfile() {
  const bio = `
  Ms. Reshma Kishore is an educator with over seven years of teaching and training experience across higher education and professional skill development. She holds a double Master’s degree—MA in Economics and MA in Educational Leadership—along with an MPhil in Economics, and has cleared the UGC-NET in Economics.
Her teaching career includes positions as Assistant Professor in Economics at Kerala Law Academy, Guest Lecturer at SN College, Varkala, and Higher Secondary Teacher with the Kerala Literacy Mission. She has also served as a PDOT Master Trainer with Learnnet Skills Ltd. under the Ministry of External Affairs, Government of India, delivering professional development and orientation training for adult learners. She is also included in the Kerala PSC Assistant Professor rank list in Economics.

  `;

  return (
    <MentorProfile
      name="Ms. Reshma Kishore"
      title="Course Facilitator – Economics"
      img={mentor4}
      bio={bio}
    />
  );
}