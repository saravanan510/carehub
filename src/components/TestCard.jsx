import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaDroplet } from "react-icons/fa6";
const TestCard = () => {
  return (
    <>
      <div className="testCard">
        <Container>
          <Row>
            <Col lg={9} className="p-0">
              <div className="d-flex align-items-center">
                <FaDroplet />
                <div>
                  <p className="mb-0 ms-2">Lutenizing Hormone (LH)</p>
                </div>
              </div>
            </Col>

            <Col lg={3} className="p-0">
              <div className="d-flex align-items-center justify-content-end">
                <span className="p-0 me-2">Add</span>
                <input
                  type="checkbox"
                  style={{ height: "16px", width: "16px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TestCard;
