import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

function Cart() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <Container className="my-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.image} height="200px" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>₹ {item.price}</Card.Text>
                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h4>Total: ₹ {totalPrice}</h4>
          <Button variant="secondary" onClick={clearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
