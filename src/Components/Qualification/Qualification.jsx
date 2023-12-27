import React from 'react'
import { SlGraduation } from "react-icons/sl";
import { BsBriefcase, BsCalendar3 } from "react-icons/bs";
import "./Qualification.css"

const Qualification = () => {
  return (
    <div className='qualification_container'>
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

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Computer Engineering</h3>
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
                    <div>
                        <h3 className="qualification_title">Web Design</h3>
                        <span className="qualification_subtitle">C.V. Raman Global University</span>
                        <div className="qualification_calender"> <BsCalendar3/> 2020-2024 </div>
                    </div>
                </div>

                {/* Qualification 3 */}
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Computer Engineering</h3>
                        <span className="qualification_subtitle">C.V. Raman Global University</span>
                        <div className="qualification_calender"> <BsCalendar3/> 2020-2024 </div>
                    </div>
                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                </div>

                {/* Qualification 4 */}
                <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className='qualification_rounder'></span>
                    </div>
                    <div>
                        <h3 className="qualification_title">Computer Engineering</h3>
                        <span className="qualification_subtitle">C.V. Raman Global University</span>
                        <div className="qualification_calender"> <BsCalendar3/> 2020-2024 </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Qualification
