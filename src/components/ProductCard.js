import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

function ProductCard({ image, title, price }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="product-card">
        <Card.Img variant="top" src={image} className="product-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Button variant="success">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
