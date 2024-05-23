import React from 'react'
import '../css/Contact.css';
import githubLogo from '../assets/pixel github.png';
import linkedinLogo from '../assets/pixel linkedin.png';
import gmailLogo from '../assets/pixel gmail.png';
import Tilt from 'react-parallax-tilt';

export const Contact = () => {
  return (
    <footer>
      <div id='contact-container'>
        <Tilt><a href='https://github.com/jahooba' target='_blank' rel='noreferrer'><img className='contact-github' src={githubLogo} alt='Pixel Github Logo by Siddhartha_76 on Reddit'/></a></Tilt>
        <Tilt><a href='https://www.linkedin.com/in/joshua-pena-008b01282/' target='_blank' rel='noreferrer'><img className='contact-linkedin' src={linkedinLogo} alt='Pixel LinkedIn Logo by Gabriel Silva'/></a></Tilt>
        <Tilt><a href="mailto:josh.uapena20002@gmail.com" target='_blank' rel='noreferrer'><img className='contact-gmail' src={gmailLogo} alt='Pixel Gmail Logo dinopixel'/></a></Tilt>
      </div>
    </footer>
  )
}
