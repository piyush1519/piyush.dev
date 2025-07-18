import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { CgFileDocument } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";

// Import your PDF certificates
import cert1 from '../CRT/TantraVihar.pdf';
import cert2 from '../CRT/Cybersecurity Analyst TATA Job Simulation.pdf';
import cert3 from '../CRT/Deloitte Cyber Job Simulation Certificate.pdf';
import cert4 from '../CRT/Deloitte Tech Job Simulation.pdf';
import cert5 from '../CRT/frontend_developer_react certificate (4).pdf';
import cert6 from '../CRT/IEEE Stepup.pdf';
import cert7 from '../CRT/JavaScript Code360.pdf';
import cert8 from '../CRT/javascript_basic certificate.pdf';
import cert9 from '../CRT/java_basic certificate.pdf';
import cert10 from '../CRT/Machine Learning Code360.pdf';
import cert11 from '../CRT/Node Code360.pdf';
import cert12 from '../CRT/nodejs_basic certificate.pdf';
import cert13 from '../CRT/problem_solving_basic certificate.pdf';
import cert14 from '../CRT/software_engineer_intern certificate.pdf';
import cert15 from '../CRT/HO_3.0.pdf';
import cert16 from '../CRT/WCE VISION.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const certificates = [
  {
    title: "Software Engineer Intern – HackerRank",
    desc: "Completed hands-on tasks simulating a software engineering internship.",
    file: cert14,
  },
  {
    title: "Cybersecurity Analyst – TATA Forage",
    desc: "Completed practical tasks in IAM, solution design, and platform integration.",
    file: cert2,
  },
  {
    title: "Frontend Developer – React HackerRank",
    desc: "Completed tasks involving React components, APIs, and UI enhancement.",
    file: cert5,
  },
  {
    title: "Cybersecurity Job Simulation – Deloitte (Forage)",
    desc: "Completed a virtual internship covering cybersecurity operations at Deloitte.",
    file: cert3,
  },
  {
    title: "Finalist – WCE Hackathon 2025",
    desc: "Finalist in 24-hour national hackathon organized by WCE ACM Student Chapter.",
    file: cert16,
  },
  {
    title: "Tech Consulting Job Simulation – Deloitte (Forage)",
    desc: "Explored client engagement, tech strategy, and problem-solving as a consultant.",
    file: cert4,
  },
  {
    title: "Machine Learning – Code360",
    desc: "Completed ML basics and model implementation.",
    file: cert10,
  },
  {
    title: "HackOverflow 3.0 – Pillai HOC",
    desc: "Participated in the 3-day national-level hackathon held at PHCET, Rasayani.",
    file: cert15,
  },
  {
    title: "JavaScript Basics – Code360",
    desc: "Covered JS fundamentals: variables, operators, data types, and functions.",
    file: cert7,
  },
  {
    title: "JavaScript (Basic) – HackerRank",
    desc: "Demonstrated basic problem-solving skills in JavaScript on HackerRank.",
    file: cert8,
  },
  {
    title: "IEEE STEP-UP Workshop Certificate",
    desc: "Participated in STEP-UP workshop conducted by IEEE for career readiness.",
    file: cert6,
  },
  {
    title: "Java (Basic) – HackerRank",
    desc: "Completed certification in Java covering OOP basics and logic building.",
    file: cert9,
  },
  {
    title: "Node.js (Basic) – HackerRank",
    desc: "Demonstrated basic backend skills using Node.js.",
    file: cert12,
  },
  {
    title: "Node.js Basics – Code360",
    desc: "Covered Node.js introduction, environment setup, and NPM.",
    file: cert11,
  },
  {
    title: "Problem Solving (Basic) – HackerRank",
    desc: "Certified for solving programming challenges using logic and algorithms.",
    file: cert13,
  },
  {
    title: "Tantravihar 2024 – VIT, Mumbai",
    desc: "Presented 'Line Follower Robot using PID' at Vidyalankar Institute of Technology.",
    file: cert1,
  },
];

const previewWidth = 240;
const previewHeight = 180;

const buttonStyle = {
  padding: '6px 12px',
  fontSize: '0.85rem',
  borderRadius: '6px',
  cursor: 'pointer',
  backgroundColor: '#3BB1E0', // Based on #62DAFC tone
  color: '#FFFFFF',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '12px',
  gap: '5px',
  textDecoration: 'none',
  transition: 'all 0.3s ease-in-out',
};

const buttonHover = {
  backgroundColor: '#B5EFFF',
  color: '#114E60',
};

const CertificationBox = ({ title, desc, file }) => {
  const [hovered, setHovered] = useState({ view: false, download: false });

  return (
    <div className="projectBox">
      {/* PDF Preview */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <div
          style={{
            width: `${previewWidth}px`,
            height: `${previewHeight}px`,
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Document file={file} onLoadSuccess={() => {}} loading="Loading...">
            <Page pageNumber={1} width={previewWidth} height={previewHeight} />
          </Document>
        </div>
      </div>

      {/* Title & Description */}
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <p
        style={{
          fontSize: '0.9rem',
          color: '#77848a',
          textAlign: 'center',
          marginTop: '4px',
        }}
      >
        {desc}
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '12px' }}>
        <a
          href={file}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
          onMouseEnter={() => setHovered(prev => ({ ...prev, view: true }))}
          onMouseLeave={() => setHovered(prev => ({ ...prev, view: false }))}
        >
          <button style={{ ...buttonStyle, ...(hovered.view ? buttonHover : {}) }}>
            <CgFileDocument /> View
          </button>
        </a>
        <a
          href={file}
          download
          style={{ textDecoration: 'none' }}
          onMouseEnter={() => setHovered(prev => ({ ...prev, download: true }))}
          onMouseLeave={() => setHovered(prev => ({ ...prev, download: false }))}
        >
          <button style={{ ...buttonStyle, ...(hovered.download ? buttonHover : {}) }}>
            <FaDownload /> Download
          </button>
        </a>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div>
      <h1 className="projectHeading">My <b>Certifications</b></h1>
      <div className="project">
        {certificates.map((cert, idx) => (
          <CertificationBox
            key={idx}
            title={cert.title}
            desc={cert.desc}
            file={cert.file}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
