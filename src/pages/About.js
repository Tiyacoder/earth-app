import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css'; // make sure the styles apply
import aboutHero from '../assets/images/about-hero.jpg';

function About() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <h1 style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '10px 20px', borderRadius: '8px' }}>
          WHO ARE WE
        </h1>
      </div>

      <Container style={{ padding: '4rem 0', maxWidth: '800px' }}>
        <h2 style={{ marginBottom: '2rem' }}>OUR MISSION</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Hello, my name is Tyler Moore and with the help of many people I made this template.
          I made it so it is super easy to update and so that it flows perfectly with my tutorials. <br /><br />
          Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. <br /><br />
          I wish you the best of luck with your business, enjoy the adventure.
        </p>
      </Container>
    </>
  );
}

export default About;
