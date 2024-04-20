import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NursingServices from "../assets/Nursing-services.png";
import { Link } from "react-router-dom";
import FeatureIcon from "../assets/features.svg";

const services = [
  {
    name: "Nursing services",
    link: "/service",
  },
  {
    name: "Post Operative Care",
    link: "/service",
  },
  {
    name: "Ventilator Care",
    link: "/service",
  },
  {
    name: "Palliative Care",
    link: "/service",
  },
  {
    name: "Elderly Care",
    link: "/service",
  },
  {
    name: "Pediatric Palliative",
    link: "/service",
  },
  {
    name: "Paralytic Care",
    link: "/service",
  },
  {
    name: "Parkinson Care",
    link: "/service",
  },
  {
    name: "Physiotherapy Services",
    link: "/service",
  },
  {
    name: "Doctor Home Visits",
    link: "/service",
  },
  {
    name: "Medical Tourism",
    link: "/service",
  },
  {
    name: "Injection Services",
    link: "/service",
  },
  {
    name: "Blood Test",
    link: "/service",
  },
  {
    name: "Hydrafacial Services",
    link: "/service",
  },
];
const PrivateNursing_list = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="g-4">
            <Col lg={9} className="service_img me-6">
              <img src={NursingServices} />
            </Col>
            <Col className="otherservices rounded-4">
              <h3 className="fs-5 fw-bold mb-3" style={{ color: "#012a4a" }}>
                Other Services
              </h3>
              <ul className="ServicePage_list-list">
                {services.map((ele, i) => {
                  return (
                    <li key={i}>
                      <img src={FeatureIcon} className="me-2" />
                      <Link to={ele.link}>{ele.name}</Link>
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

export default PrivateNursing_list;
