import React, { useState } from 'react'
import logo from '../../Assets/Images/logo.png'
import './Header.css'; 
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
        <img src={logo} alt="" className='logo' />
        {menuOpened===false && mobile===true ? (
        <div onClick={()=> setMenuOpened(true)}>
           <AiOutlineMenu style={{fontSize:"2rem"}} /> 
        </div>
        ): (
          <ul className='header-menu'>
            <li onClick={()=>setMenuOpened(false)}>  </li>
            <li> <Link onClick={()=>setMenuOpened(false)} to='qualification' spy={true} smooth={true} > Qualification </Link> </li>
            <li onClick={()=>setMenuOpened(false)}>Why us</li>
            <li onClick={()=>setMenuOpened(false)}>Plans</li>
            <li onClick={()=>setMenuOpened(false)}>Testimonials</li>
          </ul>
          ) } 
    </div>
  )
}

export default Header;
