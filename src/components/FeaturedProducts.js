import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function FeaturedProducts() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Featured Postcards</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src="https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Postcard V1</Card.Title>
              <Card.Text>$10</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Postcard V2</Card.Title>
              <Card.Text>$12</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Postcard V3</Card.Title>
              <Card.Text>$15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturedProducts;
