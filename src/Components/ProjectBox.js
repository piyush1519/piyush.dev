import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const desc = {
    SCMSDesc: "The SMART CLASSROOM MANAGEMENT SYSTEM is a web-based application built using the MERN stack. It aims to streamline Institute management, class organization, and facilitate communication between students, teachers, and administrators.",
    SCMSGithub: "https://github.com/piyush1519/SCMS",
    SCMSWebsite: "https://github.com/piyush1519/SCMS",

    SMARTLINKDesc: "Built a decentralized supply chain app using Solidity, Hardhat, and React. Focused on backend logic, smart contract deployment, and role-based product tracking.",
    SMARTLINKGithub: "https://github.com/piyush1519/SmartLink",
    SMARTLINKWebsite: "https://github.com/piyush1519/SmartLink",

    TRACKMATEDesc: "TrackMate is a decentralized supply chain app built with Solidity, Hardhat, and React. It emphasizes secure product tracking, backend smart contract management, and user role segregation.",
    TRACKMATEGithub: "https://github.com/piyush1519/TRACKMATE",
    TRACKMATEWebsite: "https://github.com/piyush1519/TRACKMATE",

    DREAM_CAR_RACINGDesc: "Dream Car Racing is a retro-inspired, browser-based racing game with pixel visuals, keyboard controls, countdown timer, and dynamic difficulty using JavaScript and HTML Canvas. It features a simple yet engaging gameplay loop.",
    DREAM_CAR_RACINGGithub: "https://github.com/piyush1519/Dream_Car_Racing_Game",
    DREAM_CAR_RACINGWebsite: "https://piyush1519.github.io/Dream_Car_Racing_Game/",

    VOCABIFIYDesc: "A vocabulary-building app designed for multilingual language learning. It helps users strengthen vocabulary through quizzes and progress tracking in various languages.",
    VOCABIFIYGithub: "https://github.com/piyush1519/WCEHackathon_NEXGEN",
    VOCABIFIYWebsite: "https://github.com/piyush1519/WCEHackathon_NEXGEN",

    OPERATING_SYSTEMS_LABDesc: "OS Virtual Lab is an interactive web-based simulator for Operating System concepts like CPU scheduling, deadlock, and memory management. It features real-time animations and user-friendly controls to enhance learning.",
    OPERATING_SYSTEMS_LABGithub: "https://github.com/piyush1519/OS-LAB",
    OPERATING_SYSTEMS_LABWebsite: "https://github.com/piyush1519/OS-LAB",
  };

  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];
  const fullText = desc[projectName + 'Desc'];

  if (!fullText) return <div>Project data not found.</div>;

  const shortText = fullText.slice(0, 150) + (fullText.length > 150 ? '...' : '');

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <h3 className='projectTitle'>{projectName.replaceAll('_', ' ')}</h3>
        <p
          className='projectDesc'
          style={{
            lineHeight: '1.7',
            fontSize: '1rem',
            color: '#f0f0f0',
            textAlign: 'justify',
            marginBottom: '1rem',
          }}
        >
          {isExpanded ? fullText : shortText}
          {fullText.length > 150 && (
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                background: 'linear-gradient(to right, #39aacaff 0%, #77848a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                fontWeight: 500,
                marginLeft: '5px',
              }}
            >
              {isExpanded ? ' Read Less' : ' Read More'}
            </span>
          )}
        </p>

        {githubLink && (
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
        <a href={websiteLink} target='_blank' rel='noopener noreferrer'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
