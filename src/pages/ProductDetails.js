import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import products from '../data/products'; // We'll create this next

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>₹ {product.price}</h4>
          <Button variant="success" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
