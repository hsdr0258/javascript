import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductBrand = () => {
  const brands = [
    {
      id: 1,
      name: 'Brand A',
      description: 'This is a brief description of Brand A.',
      logoUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Brand B',
      description: 'This is a brief description of Brand B.',
      logoUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Brand C',
      description: 'This is a brief description of Brand C.',
      logoUrl: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <Container className="mt-5">
      <Row>
        {brands.map((brand) => (
          <Col md={4} key={brand.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={brand.logoUrl} alt={brand.name} />
              <Card.Body>
                <Card.Title>{brand.name}</Card.Title>
                <Card.Text>{brand.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductBrand;
