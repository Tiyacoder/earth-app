import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css';
import contactHero from '../assets/images/contact-hero.jpg';

function Contact() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${contactHero})`,
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
          CONTACT US
        </h1>
      </div>

      <Container style={{ padding: '4rem 0', maxWidth: '600px' }}>
        <h2 style={{ marginBottom: '2rem' }}>GET IN TOUCH</h2>
        <Form>
          <Form.Group controlId="formName" style={{ marginBottom: '1rem' }}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail" style={{ marginBottom: '1rem' }}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage" style={{ marginBottom: '1.5rem' }}>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Your message..." />
          </Form.Group>

          <Button variant="dark" type="submit">Send</Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
