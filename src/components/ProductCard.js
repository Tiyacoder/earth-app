import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function ProductCard({ id, title, price, image }) {
  const { addToCart } = useCart();

  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="success" onClick={() => addToCart({ id, title, price, image })}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
