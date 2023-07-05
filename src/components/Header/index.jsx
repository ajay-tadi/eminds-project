import React from 'react'
import "./index.css"
import EM from "./EM.svg"



function Header() {
  return (
    <nav  className='navbar-main ' >
            <img
              src={EM}
              width="30"
              height="30"
              className="nav-logo d-inline-block align-top"
              alt="React Bootstrap logo"
              href='home'
            />
          
          <ul className="navbar-links ">
            <li><a href="aboutus" className=''>ABOUT US</a></li>
            <li><a href="whatwedo">WHAT WE DO</a></li>
            <li><a href="whoweserve">WHO WE SERVE</a></li>
            <li><a href="whyus">WHY US</a></li>
            <li><a href="socialgood">SOCIAL GOOD</a></li>
            <li><a href="resources">RESOURCES</a></li>
            <li><a href="careers">CAREERS</a></li>
          </ul>
          <button className='navbar-button' >Connect</button>
        
      </nav>
  );
}

export default Header;

