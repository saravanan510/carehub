import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
const TopBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <div className={isMobile ? "d-none" : "topBar"}>
      <Container>
        <Row>
          <Col className="fw-semibold">+971 58 532 4900</Col>
          <Col className="text-center fw-semibold">
            24 out 24 hours/Monday-Sunday
          </Col>
          <Col className="text-end fw-semibold">info@carehubuae.com</Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
