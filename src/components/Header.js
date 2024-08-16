import React, { useState, useRef } from "react";
import '../bootstrap/header.css'
const Header = () => {
  const [active, setActive] = useState('home');
  const [isToggled, setIsToggled] = useState(true);

  function handleClick() {
    setIsToggled(!isToggled)
    console.log(isToggled);
    if(isToggled)
    document.body.classList.add('mobile-nav-active');
  else 
  {
    document.body.classList.remove('mobile-nav-active');
  }
   
  }

  function handleToggle(name) {
    setActive(name);
    setIsToggled(!isToggled)
       if(isToggled)
       document.body.classList.add('mobile-nav-active');
     else 
     {
       document.body.classList.remove('mobile-nav-active');
     }

     }
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <h1 className="sitename">JD</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="" className={`${active === 'home' ? 'active' : ''}`}>Home<br/></a></li>
          <li><a href="#about" onClick={() => handleToggle('about')}  className={`${active === 'about' ? 'active' : ''}`}>About</a></li>
          <li><a href="#experience" onClick={() => handleToggle('experience')}  className={`${active === 'experience' ? 'active' : ''}`}>Experience</a></li>
          <li><a href="#portfolio"  onClick={() => handleToggle('portfolio')}  className={`${active === 'portfolio' ? 'active' : ''}`}>Portfolio</a></li>         
          <li><a href="#contact"  onClick={() => handleToggle('contact')}  className={`${active === 'contact' ? 'active' : ''}`}>Contact</a></li>
          {/* <li><a href="#">cv</a></li> */}
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"
        onClick={() => handleClick()}></i>
      </nav>

    </div>
  </header>
  );
}

export default Header;
