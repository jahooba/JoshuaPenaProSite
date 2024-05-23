import React from 'react'
import '../css/Experience.css';
import '../css/Card.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Tilt from 'react-parallax-tilt';
import computerImg from '../assets/pixel computer.jpg';
import phoneImg from '../assets/pixel phone.jpg';
import collegeImg from '../assets/pixel college.jpg';
import avatarGif from '../assets/pixel mando.gif';
//import Tilt from 'react-parallax-tilt';

export const Experience = () => {
  return (
    <div id='experience-container'>
      
      <CardGroup className='e-card-group'>

        <CardGroup className='e-card-group-exp'>

          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={0}>
            <Card className='e-card'>
              <div className='e-card-exp'>
                <Card.Img className='e-card-trophy' src={computerImg} alt='job 1 logo'/>
                <Card.Body className='e-card-content'>
                  <Card.Title>  CNAS Graduate Student Affairs Center | University of California, Riverside</Card.Title>
                  <Card.Text> 
                    October 2023 | Office Assistant <br/>
                    <br/>Upload over 200 graduate student employment documents using UCR’s TAOnline database system.
                    <br/>Validate student data for over 400 GSRs and TAs in every CNAS department using csv files.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Tilt>
          
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={0}>
            <Card className='e-card'>
              <div className='e-card-exp'>
                <Card.Img className='e-card-trophy' src={phoneImg} alt='job 1 logo'/>
                <Card.Body className='e-card-content'>
                  <Card.Title>  Moran Management and Consulting, Inc. | Moreno Valley, CA</Card.Title>
                  <Card.Text> 
                  January 2023 - April 2023 | Recruiter Support Specialist <br/>
                    <br/>Maintained a spreadsheet of over 100 applicants to fill job orders.
                    <br/>Called an average of 15 applicants for in-person interviews with recruiters.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Tilt>
          
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={0}>
            <Card className='e-card'>
              <div className='e-card-exp'>
                <Card.Img className='e-card-trophy' src={collegeImg} alt='job 1 logo'/>
                <Card.Body className='e-card-content'>
                  <Card.Title>  Moreno Valley College – First Year Experience (FYE) | Moreno Valley, CA</Card.Title>
                  <Card.Text> 
                  May 2021 - June 2022 | Student Aide I (FYE Peer Leader) <br/>
                    <br/> Led quarterly workshops in-person and through Zoom for students in FYE.
                    <br/>Collaborated with other Peer Leaders to complete weekly projects for the program.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Tilt>
          

        </CardGroup>

        <div>
          <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12}>
            <img  className='avatar' src={avatarGif} alt='david spottiswoode newmando'/>
          </Tilt>
        </div>

      </CardGroup>

    </div>
  )
}
