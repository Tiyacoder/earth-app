import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <Container className="hero-content">
        <h1 className="hero-title">EARTH</h1>
        <p className="hero-subtitle">MULTIPURPOSE STORE</p>
      </Container>
    </section>
  );
}

export default Hero;
