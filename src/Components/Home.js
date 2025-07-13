import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.jpg';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>PIYUSH NIMBALKAR</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
  I love the process of turning raw ideas into websites or products 
  that make a real impact.<br />
  I strive to work on projects that challenge me as a developer and allow me to build things I’m proud of.<br /><br />
  
  I'm currently diving deep into <b>AI/ML</b> and backend development.<br />
  I'm working on several projects using the <b>MERN</b> stack and exploring tools like 
  <b>Docker</b>, <b>GraphQL</b>, and microservices.<br />
  I also enjoy experimenting with <b>Python</b> and ML libraries like <b>XGBoost</b>.<br /><br />
  
  Fueled by curiosity—and plenty of <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} /> 
</p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home