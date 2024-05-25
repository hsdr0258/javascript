import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductDetail = () => {
  const product = {
    id: 1,
    name: 'Example Product',
    description: 'This is a detailed description of the example product. It has many features and benefits that are very useful.',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/300',
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>${product.price.toFixed(2)}</h4>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
