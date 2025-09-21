// src/pages/AncyProfile.js
import React from "react";
import MentorProfile from "./MentorProfile";
import mentor2 from "../img/mentors/mentor2.jpg";

export default function AncyProfile() {
  const bio = `
 Ms. Ancy Angelin is a committed educator with expertise in Education and English Literature, equipping her to guide aspirants effectively in both Paper One and Paper Two of the UGC NET. She is recognized for her ability to simplify complex concepts and present them in ways that are clear, structured, and engaging.
Her approach blends research-based methods with practical insights, helping aspirants prepare confidently. She views teaching as a journey beyond exams, fostering both academic excellence and personal growth.

  `;

  return (
    <MentorProfile
      name="Ms. Ancy Angelin"
      title="Course Facilitator – Education"
      img={mentor2}
      bio={bio}
    />
  );
}