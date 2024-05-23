import React from 'react'
import '../css/NavBar.css';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <a href='#hero-container'><button className='nav-button'>Hero</button></a>
        <a href='#about-container'><button className='nav-button'>About</button></a>
        <a href='#education-container'><button className='nav-button'>Education</button></a>
        <a href='#experience-container'><button className='nav-button'>Experience</button></a>
        <a href='#extra-container'><button className='nav-button'>Extracurriculars</button></a>
        <a href='#contact-container'><button className='nav-button'>Contact</button></a>
      </nav>
    </header>
  )
}
