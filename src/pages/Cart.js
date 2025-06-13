import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useCart } from '../context/CartContext'; // ✅ Import the context

function Cart() {
  const { cartItems } = useCart(); // ✅ Use context here

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container style={{ padding: '4rem 0' }}>
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </Container>
  );
}

export default Cart;
