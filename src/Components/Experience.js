import React, { useState } from 'react';
import { FaDownload } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

// Logo imports
import logo1 from './logo/PFL.jpg';
import logo2 from './logo/MCLL.png';
import logo3 from './logo/MTJPC.png';
import logo4 from './logo/LNT.jpg';

// Letter PDFs
import exp1 from './logo/PF.pdf';
import exp2 from './logo/MCL.pdf';
import exp3 from './logo/JPC.pdf';
import exp4 from './logo/LNT.pdf';

const experiences = [
  {
    company: "Paarvedan Foundation, Mumbai",
    role: "Full Stack Developer Intern",
    duration: "Nov 2024 – Feb 2025",
    desc: "Contributed to ERP and community website dev. Added features, fixed bugs, and enhanced user interfaces.",
    logo: logo1,
    letter: exp1,
  },
  {
    company: "L&T STA, Mumbai",
    role: "Machine Learning Trainee",
    duration: "16th – 21st June 2025",
    desc: "Residential training program on Machine Learning using Python at L&T STA Madh Island.",
    logo: logo4,
    letter: exp4,
  },
  {
    company: "MetaCraftLab, Mumbai",
    role: "Backend Developer Intern",
    duration: "June 2024 – Aug 2024",
    desc: "Worked on backend development using the MERN stack. Built scalable APIs, managed databases, and worked with Git and agile methods.",
    logo: logo2,
    letter: exp2,
  },
  {
    company: "Mahesh Tutorials – J.P. Classes, Mumbai",
    role: "Tech Support Staff",
    duration: "Aug 2022 – Jan 2023",
    desc: "Provided technical assistance for classroom tech. Resolved issues and ensured smooth academic operations.",
    logo: logo3,
    letter: exp3,
  },
];

const buttonStyle = {
  padding: '6px 12px',
  fontSize: '0.85rem',
  borderRadius: '6px',
  cursor: 'pointer',
  backgroundColor: '#442046',
  color: '#fff',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '12px',
  gap: '5px',
  transition: 'all 0.2s ease-in-out',
};

const buttonHover = {
  backgroundColor: '#351337',
};

const ExperienceBox = ({ company, role, duration, desc, logo, letter }) => {
  const [hovered, setHovered] = useState({ view: false });

  return (
    <div
      className="projectBox"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#fff',
        paddingBottom: '1rem',
        transition: 'transform 0.2s ease-in-out',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* Logo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <div
          style={{
            width: '180px',
            height: '180px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={logo}
            alt="Company Logo"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      {/* Info */}
      <h3 style={{ textAlign: 'center', fontWeight: '600', color: '#ffffff' }}>{company}</h3>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#cba4de', margin: '4px 0' }}>{role}</p>
      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#aaaaaa', marginBottom: '8px' }}>{duration}</p>
      <p style={{ fontSize: '0.85rem', color: '#dddddd', textAlign: 'center', padding: '0 6px' }}>{desc}</p>

      {/* Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '20px',
        paddingTop: '1rem',
        flexWrap: 'wrap',
      }}>
        <a
          href={letter}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHovered({ view: true })}
          onMouseLeave={() => setHovered({ view: false })}
        >
          <button style={{ ...buttonStyle, ...(hovered.view ? buttonHover : {}) }}>
            <CgFileDocument /> View
          </button>
        </a>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <h1 className="projectHeading" style={{ color: "#ffffff" }}>
        My <b>Experience</b>
      </h1>

      {/* Grid Container */}
      <div
        className="project"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '2rem',
        }}
      >
        {experiences.map((exp, idx) => (
          <ExperienceBox
            key={idx}
            company={exp.company}
            role={exp.role}
            duration={exp.duration}
            desc={exp.desc}
            logo={exp.logo}
            letter={exp.letter}
          />
        ))}
      </div>

      {/* Responsive Media Queries (via style tag) */}
      <style>
        {`
          @media (max-width: 992px) {
            .project {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 600px) {
            .project {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Experience;
