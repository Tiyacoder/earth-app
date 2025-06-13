import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

function Shop() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Shop Our Postcards</h2>
      <Row>
        <ProductCard
          image="https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Postcard V1"
          price="5"
        />
        <ProductCard
          image="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Postcard V2"
          price="6"
        />
        <ProductCard
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Postcard V3"
          price="7"
        />
      </Row>
    </Container>
  );
}

export default Shop;
