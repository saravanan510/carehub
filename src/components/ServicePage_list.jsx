import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrivateNursing_img from "../assets/PrivateNursing-img.jpg";
import { Link } from "react-router-dom";

const services = [
  "Home Nursing",
  "24 Hours In-Home Care",
  "Ventilator Care",
  "Post Hospitalization",
  "Nurses Visit",
  "Palliative care",
  "Elderly Care Services",
  "Post Operative Care",
  "Pediatric Palliative care",
  "Paralytic Care",
];
const ServicePage_list = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="g-5">
            <Col lg={9}>
              <img src={PrivateNursing_img} width="100%" />
            </Col>
            <Col className="otherservices rounded-4">
              <h3 className="fs-5 fw-bold">Other Services</h3>
              <ul className="ServicePage_list-list">
                {services.map((ele, i) => {
                  return (
                    <li key={i}>
                      <Link>{ele}</Link>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicePage_list;
