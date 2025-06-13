import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

function Hero() {
  return (
    <section className="hero-section">
      <Container className="hero-content">
        <h1 className="hero-title">E A R T H</h1>
        <p className="hero-subtitle">MULTIPURPOSE STORE</p>
      </Container>
    </section>
  );
}

export default Hero;
