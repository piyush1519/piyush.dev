import React from 'react';
import ProjectBox from './ProjectBox';
import OS from '../images/OS.png';
import SCMS from '../images/SCMS.png';
import TM from '../images/TM.png';

import SL from '../images/SL.png';
import DC from '../images/DC.png';
import VF from '../images/VOCABIFI.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TM} projectName="TRACKMATE" />
        <ProjectBox projectPhoto={SCMS} projectName="SCMS" />
        <ProjectBox projectPhoto={OS} projectName="OPERATING_SYSTEMS_LAB" />

        <ProjectBox projectPhoto={SL} projectName="SMARTLINK" />
        <ProjectBox projectPhoto={VF} projectName="VOCABIFIY" />
        <ProjectBox projectPhoto={DC} projectName="DREAM_CAR_RACING" />
        
      </div>

    </div>
  )
}

export default Projects