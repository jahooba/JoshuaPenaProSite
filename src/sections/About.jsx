import React from 'react'
import '../css/About.css';
import '../css/Card.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Tilt from 'react-parallax-tilt';
import pdf from '../assets/Resume.pdf';
import resume from '../assets/resume_screenshot.png';
import containerGif from '../assets/pixel night-room.gif';

export const About = () => {
  return (
    <div id='about-container'>
      
      <img className='about-container-gif' src={containerGif} alt='The Room by Jongwon Park'/>

      <CardGroup className='e-card-group-about'>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Card className='e-card'>
            <Card.Body className='e-card-content'>
              <Card.Header className='e-card-header'>Career Goals</Card.Header>
              <Card.Text>🎲I'd like to work in game development one day.</Card.Text>
              <Card.Text>🖥️I want to gain more experience in software development roles.</Card.Text>
            </Card.Body>
          </Card>
        </Tilt>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Card className='e-card'>
            <Card.Body className='e-card-content'>
              <Card.Header className='e-card-header'>Resume</Card.Header>
              <Tilt>
                <a className='resume-text' href={pdf} target='_blank' rel='noreferrer'><img className='resume' src={resume} alt='screenshot of resume'/></a>
              </Tilt>
            </Card.Body>
          </Card>
        </Tilt>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <Card className='e-card'>
            <Card.Body className='e-card-content'>
              <Card.Header className='e-card-header'>About Me</Card.Header>
              <Card.Text>🎮I enjoy playing story-driven single player video games.</Card.Text>
              <Card.Text>🖊️Passionate about digital art and doodling in my notes.</Card.Text>
              <Card.Text>⛰️Hiking is my favorite outdoor activity.</Card.Text>
            </Card.Body>
          </Card>
        </Tilt>
      </CardGroup>

    </div>
  )
}
