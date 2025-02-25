import React from "react";
import "./StudyAbroad.css"; // Import the CSS file

const countries = [
  {
    name: "United Kingdom (UK)",
    flag: "/images/flags/uk.png",
    image: "/images/countries/uk.jpg",
    reasons: [
      "World-class universities such as Oxford and Cambridge.",
      "Globally recognized degrees with a strong academic reputation.",
      "Shorter degree programs (3 years for Bachelor's, 1 year for Master's).",
      "Work opportunities during and after study.",
      "Diverse and multicultural environment.",
    ],
    opportunities:
      "Undergraduate, Postgraduate, and Doctoral programs with strong industry connections.",
    admission: {
      undergraduate: [
        "High school diploma (A-levels, IB, or equivalent).",
        "IELTS/TOEFL for English proficiency.",
        "Personal statement and reference letters.",
      ],
      postgraduate: [
        "Bachelor's degree with a minimum GPA requirement.",
        "English proficiency test (IELTS/TOEFL).",
        "Work experience (for MBA and certain programs).",
      ],
    },
  },
  {
    name: "United States (US)",
    flag: "/images/flags/us.png",
    image: "/images/countries/us.jpg",
    reasons: [
      "Over 4,000 universities with globally ranked institutions.",
      "Flexible education system with customizable curriculum.",
      "Strong research and innovation in STEM and business.",
      "Job market with Optional Practical Training (OPT) for international students.",
      "Diverse campus life and opportunities for networking.",
    ],
    opportunities:
      "Undergraduate and graduate degrees with a focus on practical learning and research.",
    admission: {
      undergraduate: [
        "High school diploma (GPA 2.5+ recommended).",
        "SAT/ACT (optional in some universities).",
        "IELTS/TOEFL for English proficiency.",
        "Personal essay and letters of recommendation.",
      ],
      postgraduate: [
        "Bachelor's degree (minimum GPA varies).",
        "GRE/GMAT (for certain programs like MBA).",
        "Statement of purpose and reference letters.",
      ],
    },
  },
  {
    name: "Germany",
    flag: "/images/flags/germany.png",
    image: "/images/countries/germany.jpg",
    reasons: [
      "High-quality education with minimal or no tuition fees.",
      "Top-ranked technical and research universities.",
      "Focus on engineering, IT, and business programs.",
      "18-month post-study work visa.",
      "Strong economy and career opportunities.",
    ],
    opportunities:
      "Bachelor’s, Master’s, and PhD programs with a strong emphasis on research and industry collaboration.",
    admission: {
      undergraduate: [
        "High school diploma equivalent to German standards.",
        "IELTS/TOEFL for English programs; TestDaF for German programs.",
        "University entrance qualification (Abitur equivalent).",
      ],
      postgraduate: [
        "Bachelor's degree (minimum GPA required).",
        "German-taught programs require proof of German proficiency.",
        "Motivation letter and CV.",
      ],
    },
  },
  {
    name: "Ireland",
    flag: "/images/flags/ireland.png",
    image: "/images/countries/ireland.jpg",
    reasons: [
      "A fast-growing tech and business hub with companies like Google, Facebook, and Apple.",
      "High-quality education and home to Trinity College Dublin, University College Dublin.",
      "A safe and welcoming country for international students.",
      "English-speaking environment with strong global recognition of degrees.",
      "Stay Back Option allows international students to remain for up to 2 years to find jobs.",
    ],
    opportunities:
      "Undergraduate and postgraduate programs in IT, business, medicine, and engineering. Research-intensive universities offer opportunities for PhD and innovation projects.",
    admission: {
      undergraduate: [
        "High school diploma with strong academic record.",
        "IELTS/TOEFL for English proficiency.",
      ],
      postgraduate: [
        "Bachelor's degree in a relevant field.",
        "Statement of purpose and letters of recommendation.",
      ],
    },
  },
  {
    name: "France",
    flag: "/images/flags/france.png",
    image: "/images/countries/france.jpg",
    reasons: [
      "A global leader in business, fashion, and engineering education.",
      "Affordable public universities with high-quality education.",
      "A strong cultural and historical experience.",
      "Opportunities to learn or improve French, which is a widely spoken global language.",
      "Post-study work opportunities with 1-2 years of temporary residence permit (APS).",
    ],
    opportunities:
      "Undergraduate and graduate programs in business, arts, science, and engineering. International business and hospitality schools among the best in the world.",
    admission: {
      undergraduate: [
        "High school diploma.",
        "Some programs require basic French proficiency.",
      ],
      postgraduate: [
        "Bachelor's degree in a related field.",
        "Some courses require GMAT/GRE.",
      ],
    },
  },
  {
    name: "New Zealand",
    flag: "/images/flags/newzealand.png",
    image: "/images/countries/newzealand.jpg",
    reasons: [
      "Ranked as one of the safest and most peaceful countries in the world.",
      "Strong student support systems with a welcoming environment.",
      "Post-study work visa for up to 3 years, depending on the course.",
    ],
    opportunities:
      "Wide range of undergraduate and postgraduate programs with a focus on innovation. Internships and co-op programs integrated into many degree courses.",
    admission: {
      undergraduate: [
        "High school diploma with good academic record.",
        "IELTS/TOEFL for English proficiency.",
      ],
      postgraduate: [
        "Bachelor’s degree with minimum GPA requirement.",
        "Work experience for MBA programs.",
      ],
    },
  },
  {
    name: "Canada",
    flag: "/images/flags/canada.png",
    image: "/images/countries/canada.jpg",
    reasons: [
      "Known for its high quality of education and multicultural environment.",
      "Post-Graduation Work Permit (PGWP) allows students to stay and work for up to 3 years.",
      "Pathway to permanent residency through various immigration programs.",
    ],
    opportunities:
      "Strong focus on research and innovation in STEM, healthcare, and social sciences.",
    admission: {
      undergraduate: ["High school diploma.", "IELTS/TOEFL for English proficiency."],
      postgraduate: ["Bachelor’s degree with GPA requirement."],
    },
  },
  {
    name: "Australia",
    flag: "/images/flags/australia.png",
    image: "/images/countries/australia.jpg",
    reasons: [
      "A high quality of life and a safe environment.",
      "Post-study work visa allows students to stay for 2-4 years after graduation.",
    ],
    opportunities:
      "Undergraduate and postgraduate degrees with a strong focus on research and innovation.",
    admission: {
      undergraduate: ["High school diploma", "IELTS/TOEFL."],
      postgraduate: [
        "Bachelor’s degree",
        "IELTS/TOEFL",
        "Some courses require work experience.",
      ],
    },
  },
];

const StudyAbroad = () => {
  return (
    <div className="study-abroad-container">
      <h2 className="title">Study Abroad Opportunities</h2>
      <div className="countries-container">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            <img src={country.image} alt={country.name} className="country-image" />
            <div className="country-info">
              <img src={country.flag} alt={`${country.name} Flag`} className="flag" />
              <h3>{country.name}</h3>
              <p><strong>Opportunities:</strong> {country.opportunities}</p>
              <h4>Reasons to Study:</h4>
              <ul className="list-disc">{country.reasons.map((reason, i) => <li key={i}>{reason}</li>)}</ul>
              <h4>Admission Requirements:</h4>
              <p><strong>Undergraduate:</strong> {country.admission.undergraduate.join(", ")}</p>
              <p><strong>Postgraduate:</strong> {country.admission.postgraduate.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyAbroad;
