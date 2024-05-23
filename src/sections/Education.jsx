import React from 'react'
import '../css/Education.css';
import '../css/Card.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Tilt from 'react-parallax-tilt';
import containerGif from '../assets/terminal screen.gif';
export const ucr_seal = require('../assets/UC_Riverside_seal.svg.png');
export const mvc_seal = require('../assets/MVC Seal.png');


export const Education = () => {
  return (
    <div id='education-container'>

      <img className='education-container-gif' src={containerGif} alt='OpenSource.com'/>

      <CardGroup className='e-card-group-education'>

        <CardGroup>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <Card className='e-card'>
              <Card.Body className='e-card-content'>
                <Card.Title>Coursework</Card.Title>
                <Card.Text className='e-card-text'>Software Construction</Card.Text>
                <Card.Text className='e-card-text'>Technical Communications</Card.Text>
                <Card.Text className='e-card-text'>Discrete Structures</Card.Text>
              </Card.Body>
            </Card>
          </Tilt>

          <Tilt>
            <Card className='e-card'>
              <Card.Body className='e-card-content'>
                <Card.Title>Programming Languages</Card.Title>
                <Card.Text>C++</Card.Text>
                <Card.Text>Python</Card.Text>
                <Card.Text>HTML/CSS</Card.Text>
                <Card.Text>JavaScript</Card.Text>
              </Card.Body>
            </Card>
          </Tilt>
        </CardGroup>        

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} >
          <Card className='e-card'>
            <Card.Body className='e-card-content'>
              <Card.Title>Degrees</Card.Title>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className='ucr-degree'>
                  <Card.Text className='e-card-degree-text'>University of California, Riverside</Card.Text>
                  <Card.Text className='e-card-degree-text'>Computer Science B.S. - June 2025</Card.Text>
                  <img className='e-card-degree-seal' src={ucr_seal} alt='ucr seal'/>
                  <Card.Text className='e-card-degree-text'>Joshua Pena</Card.Text>
                </div>
              </Tilt>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className='mvc-degree'>
                  <Card.Text className='e-card-degree-text'>Moreno Valley College</Card.Text>
                  <Card.Text className='e-card-degree-text'>Associate in Computer Science for Transfer - June 2022</Card.Text>
                  <img className='e-card-degree-seal' src={mvc_seal} alt='ucr seal'/>
                  <Card.Text className='e-card-degree-text'>Joshua Pena</Card.Text>
                </div>
              </Tilt>
            </Card.Body>
          </Card>
        </Tilt>

      </CardGroup>
      
    </div>
  )
}
