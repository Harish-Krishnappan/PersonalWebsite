import React, { useEffect } from 'react';
import './NavBar.css';
import Image from './linkedin.png';

// Used w3schools, my dad, webflow, and other rescources listed in the navbar section readMe for help on this function
function NavBar() {
  useEffect(() => {
    const links = document.querySelectorAll('#navBar a');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div id="navBar">
      <ul className="bar">
        <li className="Nav"><a href="https://www.linkedin.com/in/harish-krishnappan/"><img src={Image} height={20} width={20} alt="linkedin logo" /></a></li>
        <li className="Nav"><a href="#contact">Contact</a></li>
        <li className="Nav"><a href="#interests">Interests</a></li>
        <li className="Nav"><a href="#skills">Skills</a></li>
        <li className="Nav"><a href="#experience">Experience</a></li>
        <li className="Nav"><a href="#about">About</a></li>
        <div id="Harish"><li className="Nav"><a href="#me">Harish Krishnappan</a></li></div>
      </ul>
    </div>
  );
}

export default NavBar;
