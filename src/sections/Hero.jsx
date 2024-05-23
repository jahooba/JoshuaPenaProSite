import React from 'react'
import '../css/Hero.css';
import '../css/Card.css';
import portrait from '../assets/pro_portrait.jpg';
import containerGif from '../assets/pixel city sunset.gif';
import Marquee from "react-fast-marquee";


export const Hero = () => {
  return (
    <div id='hero-container'>
      <img className='hero-container-gif' src={containerGif} alt='pixel city sunset by Nakamoto0'/>
      
      <div className='hero-portrait-container'>
        <img className='hero-portrait' src={portrait} alt='professional portrait'/>
        <h1 className='hero-name'>Joshua Peña</h1>  
      </div>
      
      <Marquee className='marquee-hero-description' speed={100}>
        <h2>| Currently earning my Undergraduate Degree in Computer Science B.S. at UCR🍊🐻| At this moment, I am finishing my finals...| Spring 2024 is coming to a close...</h2>
      </Marquee>
    </div>
  )
}