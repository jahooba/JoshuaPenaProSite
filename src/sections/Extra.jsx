import React from 'react'
import '../css/Extra.css';
import containerGif from '../assets/pixel landscape.gif';
import bootPng from '../assets/pixel boot.png';
import trashJpg from '../assets/pixel trashcan.jpg'
import duck from '../assets/dancing duck.gif'

export const Extra = () => {
  return (
    <div id='extra-container'>
        <img className='extra-container-gif' src={containerGif} alt='Yellowstone by anasabdin'/>
        <div className='hiking'>
          <img className='e-card-trophy-boot' src={bootPng} alt='Pixel boot'/>
          <p className='hiking-text'>I like to explore new trails with friends and family whenever we go to the mountains.</p>
        </div>

        <div className='trash'>
          <img className='e-card-trophy-trash' src={trashJpg} alt='Pixel trashcan'/>
          <p className='trash-text'>I volunteer to clean-up the parks in my city.</p>
        </div>

        <img className='duck' src={duck} alt='Dancing Shuba duck'/>
    </div>
  )
}
