import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const TopBar = () => {
  return (
    <div className="topBar d-none d-sm-block">
      <Container>
        <Row>
          <Col>+ (123) 1800 - 567 - 8990</Col>
          <Col className="text-center">24 out 24 hours / Monday - Sunday</Col>
          <Col className="text-end">carhub@info.com</Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
