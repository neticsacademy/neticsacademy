import React from "react";
import "./Faq.css";
import Ugc from "../components/Ugc";

const faqData = [
  {
    category: "UGC NET, KSET, CTET, KETE",
    qas: [
      { q: "Who can apply for UGC NET?", a: "Candidates who have completed or are in the final year of a Master’s degree with at least 55% marks (50% for reserved categories) are eligible." },
      { q: "What is the age limit for UGC NET?", a: "For JRF (Junior Research Fellowship), the upper age limit is 30 years (with relaxation for reserved categories). For Assistant Professor eligibility, there is no age limit." },
      { q: "What subjects does Netics Academy provide coaching for?", a: "We provide training for English,Commerce,Social Work,Management and Education" },
      { q: "What is the structure of the UGC NET/KSET exam?", a: "Paper 1: Teaching & Research Aptitude (common for all). Paper 2: Subject-specific questions." },
      { q: "What is the difference between UGC NET and KSET?", a: "UGC NET is a national-level exam, while KSET is a state-level exam applicable only within Karnataka." },
      { q: "What is CTET and who should apply?", a: "CTET is for teaching positions in central government schools. Any graduate with B.Ed. or D.El.Ed. can apply." },
      { q: "What is the validity of certificates?", a: "UGC NET/KSET Assistant Professor: Lifetime. JRF (NET): 3 years. CTET & KETE: 7 years." },
    ]
  },
  {
    category: "Language Training (OET, PTE, IELTS, TOEFL, German A1–B2)",
    qas: [
      { q: "Who should take IELTS or TOEFL?", a: "Students and professionals aspiring to study, work, or migrate to English-speaking countries such as the UK, USA, Canada, Australia, or New Zealand." },
      { q: "Which is better: IELTS or PTE?", a: "Both are globally accepted. IELTS is more widely recognized in the UK & Canada, while PTE is fully computer-based and provides faster results." },
      { q: "Who can write OET?", a: "Healthcare professionals like nurses, doctors, pharmacists, and physiotherapists who want to migrate and work abroad." },
      { q: "What is taught in German A1–B2 levels?", a: "A1 & A2: Basic communication and everyday conversations. B1 & B2: Advanced grammar, workplace interactions, academic usage." },
      { q: "Do you provide mock tests?", a: "Yes, we conduct weekly mock tests replicating the real exam format to boost confidence." },
    ]
  },
  {
    category: "General Institute Questions",
    qas: [
      { q: "How do I register for a course?", a: "You can register via our website, visit our office, or contact us by phone/WhatsApp." },
      { q: "Do you offer flexible batch timings?", a: "Yes, we offer weekday, weekend, and evening batches to suit working professionals and students." },
      { q: "Do you provide installment payment options?", a: "Yes, students can pay fees in flexible installments." },
      { q: "Are the trainers certified?", a: "Yes, our trainers include UGC NET-qualified professors, certified English language trainers, and German instructors." },
      { q: "Why choose Netics Academy?", a: "Expert faculty, student-focused teaching, affordable fee plans, high success rate, and personalized mentorship." },
    ]
  }
];

export default function FaqPage() {
  return (
  <>
  <div><Ugc/></div>
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
      {faqData.map((block, blockIndex) => (
        <div key={blockIndex} className="faq-category">
          <h3 className="faq-category-title">{block.category}</h3>
          {block.qas.map((item, index) => (
            <div key={index} className="faq-item">
              <p className="faq-question"><strong>Q: {item.q}</strong></p>
              <p className="faq-answer">A: {item.a}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
    </>
  );
}