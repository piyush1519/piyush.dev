import React from 'react'; 
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";
import {  FaBrain } from "react-icons/fa";  // AI/ML icon
import { MdOutlineSecurity } from "react-icons/md"; // Cybersecurity icon
// import { HiOutlineChip } from "react-icons/hi";
import { BsCpu } from "react-icons/bs";
const Skills = ({ skill }) => {
  const icon = {
    'React': <FaReact />,
    'Node': <DiNodejs />,
    'Express': <SiExpress />,
    'MongoDb': <SiMongodb />,
    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'Javascript': <DiJavascript1 />,
    'Python': <FaPython />,
    'Postman': <SiPostman />,
    'Figma': <FaFigma />,
    'Npm': <FaNpm />,
    'Vercel': <SiVercel />,
    'AI/ML': <FaBrain />,
    'Cybersecurity': <MdOutlineSecurity />,
    'Machine Learning': <BsCpu />,
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || <span>{skill}</span>}
    </div>
  );
};

export default Skills;
