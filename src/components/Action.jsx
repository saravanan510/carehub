import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosCall } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Action = () => {
  return (
    <div className="fixed-actionbg ">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="action-item">
              <a href="tel:+919600180505">
                <IoIosCall style={{ color: "white" }} className="fs-2" />
              </a>
              <p>Call US</p>
            </div>
          </Col>
          <Col className="text-center">
            <div className="action-item">
              <Link to={"/contact"}>
                <IoIosContact style={{ color: "white" }} className="fs-2" />
              </Link>
              <p>CALL BACK</p>
            </div>
          </Col>
          <Col className="text-center">
            <div className="action-item">
              <a href="https://wa.me/919600180505">
                <IoLogoWhatsapp style={{ color: "white" }} className="fs-2" />
              </a>
              <p>WHATSAPP</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Action;
