import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    SCMSDesc : "The SMART CLASSROOM MANAGEMENT SYSTEM is a web-based application built using the MERN stack. It aims to streamline Institute management, class organization, and facilitate communication between students, teachers, and administrators.",
    SCMSGithub : "https://github.com/piyush1519/SCMS",
    SCMSWebsite : "https://github.com/piyush1519/SCMS",

    SMARTLINKDesc : "Built a decentralized supply chain app using Solidity, Hardhat, and React. Focused on backend logic smart contract deployment, and role-based product tracking..",
    SMARTLINKGithub : "https://github.com/piyush1519/SmartLink",
    SMARTLINKWebsite : "https://github.com/piyush1519/SmartLink",

    TRACKMATEDesc : "Built a decentralized supply chain app using Solidity, Hardhat, and React. Focused on backend logic smart contract deployment, and role-based product tracking..",
    TRACKMATEGithub : "https://github.com/piyush1519/TRACKMATE",
    TRACKMATEWebsite : "https://github.com/piyush1519/TRACKMATE",

    DREAM_CAR_RACINGDesc : "Dream Car Racing is a retro-inspired, browser-based racing game with pixel art visuals, keyboard controls, countdown timer, and dynamic difficulty using JavaScript and HTML Canvas-style rendering. It features a simple yet engaging gameplay loop, allowing players",
    DREAM_CAR_RACINGGithub : "https://github.com/piyush1519/Dream_Car_Racing_Game",
    DREAM_CAR_RACINGWebsite : "https://github.com/piyush1519/Dream_Car_Racing_Game",

    VOCABIFIYDesc:"A Vocabulary Learning App designed to make language acquisition seamless and engaging through a multilingual learning approach, offering tools to build and enhance vocabulary across various languages.",
    VOCABIFIYGithub:"https://github.com/piyush1519/WCEHackathon_NEXGEN",
    VOCABIFIYWebsite:"https://github.com/piyush1519/WCEHackathon_NEXGEN",

    OPRATING_SYSTEMS_LABDesc:"OS Virtual Lab is an interactive web-based platform to simulate and visualize Operating System concepts like CPU scheduling, deadlock, and memory management using real-time animations and interactive tools.",
    OPRATING_SYSTEMS_LABGithub:"https://github.com/piyush1519/OS-LAB",
    OPRATING_SYSTEMS_LABWebsite:"https://github.com/piyush1519/OS-LAB",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox