import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default function AGIBox({ title, description, children, ...rest }) {
  return (
    <>
      <Container {...rest}>
        <Row className="justify-content-center mt-4">
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {children}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
