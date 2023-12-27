import React from 'react';
import './About.css'
import { BiRightArrowAlt } from "react-icons/bi";
import { SiWebhint, SiJava, SiReact, SiHiveBlockchain, SiJsonwebtokens } from "react-icons/si";
import { SlGraduation } from "react-icons/sl";
import { BsBriefcase, BsCalendar3 } from "react-icons/bs";

const About = () => {
  return (
    <div className='aboutPage'>
      {/* <div className="left-a">
        <div className="le-cont-1">
          <div>I AM A </div>
          <div>Computer Science Student. Lorem ipsum dolor sit amet </div>
        </div>
        <div className="ri-cont-2">
            <ul>
                <li>I learn to degin myself. I always do my best.</li>
                <li>I learn to degin myself. I always do my best.</li>
                <li>I learn to degin myself. I always do my best.</li>
            </ul>
        </div>
      </div> */}
      <div className='qualification_container' id='qualification'>
        <div className="qualification_tabs">
            <div className="qualification_button">
                <SlGraduation className="qualification-icon"/> Education
            </div>

            <div className="qualification_button">
                <BsBriefcase className="qualification-icon"/> Work
            </div>
        </div>

        <div className="qualification_section">
            <div className="qualification_content">

                 {/* Qualification 1 */}
                <div className="qualification_data">
                    <div className='qual-data'>
                        <h3 className="qualification_title">CSE(IOT & CS)</h3>
                        <span className="qualification_subtitle">C.V. Raman Global University</span>
                        <div className="qualification_calender"> <BsCalendar3/> 2020-2024 </div>
                    </div>

                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                </div>

                {/* Qualification 2 */}
                <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                    <div className='qual-data'>
                        <h3 className="qualification_title">Intermediate</h3>
                        <span className="qualification_subtitle">Basic Science & Humanities</span>
                        <div className="qualification_calender"> <BsCalendar3/> 2018-2020 </div>
                    </div>
                </div>

                {/* Qualification 3 */}
                <div className="qualification_data">
                    <div className='qual-data'>
                        <h3 className="qualification_title">Schooling</h3>
                        <span className="qualification_subtitle">School Of Integral Education</span>
                        <div className="qualification_calender"> <BsCalendar3/> 2006-2018 </div>
                    </div>
                    <div>
                        <span className='qualification_rounder'></span>
                        {/* <span className='qualification_line'></span> */}
                    </div>
                </div>

                {/* Qualification 4 */}
                {/* <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                    <div>
                        <h3 className="qualification_title">Computer Engineering</h3>
                        <span className="qualification_subtitle">C.V. Raman Global University</span>
                        <div className="qualification_calender"> <BsCalendar3/> 2020-2024 </div>
                    </div>
                </div> */}


            </div>
        </div>
    </div>
      <div className="right-a">

        <div className="left-box">
          <div className="box selected">
              <button className="head-symb"> <SiJava/> </button>
              <div className="heading">Java</div>
              <div className="cont">Expertise in Java Development More focused on visual design aspects.</div>
              <a href="/">View More<BiRightArrowAlt/></a>
          </div>
          <div className="box">
          <button className="head-symb"> <SiReact/> </button>
              <div className="heading">Web</div>
              <div className="cont">Expertise in Java Development More focused on visual design aspects.</div>
              <a href="/">View More<BiRightArrowAlt/></a>
          </div>
        </div>

        <div className="right-box">
          <div className="box">
              <button className="head-symb"> <SiJava/> </button>
              <div className="heading">Frontend</div>
              <div className="cont">Expertise in Java Development More focused on visual design aspects.</div>
              <a href="/">View More<BiRightArrowAlt/></a>
          </div>
          <div className="box">
              <button className="head-symb"> <SiJava/> </button>
              <div className="heading">Backend</div>
              <div className="cont">Expertise in Java Development More focused on visual design aspects.</div>
              <a href="/">View More<BiRightArrowAlt/></a>
          </div>
        </div>



      </div>


    </div>
  )
}

export default About;
