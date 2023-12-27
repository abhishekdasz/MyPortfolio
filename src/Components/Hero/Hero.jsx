import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
import { AiFillHeart } from "react-icons/ai";
import heroimg from '../../Assets/Images/hero-img.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = {type:'spring', duration: 3 }
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/* the best ad */}
        <div className="the-best-ad">
            <motion.div initial={{left:'200px'}} whileInView={{left:'9px'}} transition={{...transition, type: 'tween'}} ></motion.div>
            <span>Let's Buld Something Together</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
            <div className='intro'>
                <span className='stroke-text'>Hey, </span>
                <span>I Am</span>
            </div>
            <div>
                <span>Abhishek Das</span>
            </div>
            <div>
                <span>I'm a front-end web developer specializing in bulding exceptional digital experiences. I'm a front-end web developer specializing in bulding exceptional digital experiences.</span>
            </div>
        </div>
        {/* figures */}
        <div className="figures">
            <div>
                <span> <NumberCounter end={25} start={1} delay='1' prefix="+" postFix="+" className="increment" /> </span>
                <span>Projects <br/>Completed</span>
            </div>
            <div>
                <span> <NumberCounter end={10} start={1} delay='1' postFix="+" className="increment" /> </span>
                <span>Happy <br/>Clients</span>
            </div>
            <div>
                <span> <NumberCounter end={3} start={1} delay='1' postFix="+" className="increment" /> </span>
                <span>Years <br/>Experience</span>
            </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
            <button className="btn">Download CV</button>
            <button className="btn">Know More</button>
        </div>
      </div>
      <div className="right-h">

        {/* <button className='btn'>Join Now</button>

        <div className="heart-rate">
            <img src="" alt="" /> <AiFillHeart className='img'/>
            <span>Heart Rate</span> <span>116 bpm</span>
        </div> */}

        {/* hero images */}
        <img src={heroimg} alt="" className='hero-image' />
        <img src="" alt="" className='hero-image-back'/>
      </div>
    </div>
  )
}

export default Hero;
