import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
         <p>
  Hi, my name is <b>Piyush Nimbalkar</b> and I am from Mumbai, India. 
  I'm a <b>MERN stack web developer</b> and a third-year college student pursuing <b>BTech in Computer Engineering</b> at VIT, Mumbai.<br/><br/>

  I’ve interned at <b>MetaCraftLab</b> and <b>Paarvedan Foundation</b>, working on backend systems, ERP platforms, and web interfaces.
  I’m especially interested in <b>AI/ML</b>, <b>cybersecurity</b>, and <b>full-stack development</b>, and have been a finalist in multiple national-level hackathons.<br/><br/>

  I love building meaningful tech — from salary prediction models to blockchain-based supply chains. 
  You can explore some of my work in the Projects section or visit my 
   <a href="https://github.com/piyush1519" target="_blank"> GitHub</a>.<br/><br/>

  Outside of coding, I’m an avid <b>trekker</b> and love <b>visiting historic forts and places</b>. 
  Exploring nature and history keeps me grounded and inspired.<br/><br/>

  I’m <b>open</b> to collaborations, freelance opportunities, or internships. 
  Let’s connect — links are in the footer!
</p>

        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
  <Skills skill='React' />
        <Skills skill='Npm' />
        <Skills skill='Node' />
        <Skills skill='Python' />
        <Skills skill='AI/ML' />
         <Skills skill='Express' />
  <Skills skill='Cybersecurity' />
 
  <Skills skill='Figma' />
  <Skills skill='Git' />
  <Skills skill='Github' />
  <Skills skill='Javascript' />
  <Skills skill='Machine Learning' />
  <Skills skill='MongoDb' />
  
  
  <Skills skill='Postman' />
  
  <Skills skill='Vercel' />

        
      </div>
    </>
  )
}

export default About