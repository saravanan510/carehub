import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrivateNursing_img from "../assets/PrivateNursing-img.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Private Nursing",
    link: "/service",
  },
  {
    name: "24 Hours In-Home Care",
    link: "/service",
  },
  {
    name: "Ventilator Care",
    link: "/service",
  },
  {
    name: "Post Hospitalization",
    link: "/service",
  },
  {
    name: "Nurses Visit",
    link: "/service",
  },
  {
    name: "Palliative care",
    link: "/service",
  },
  {
    name: "Elderly Care Services",
    link: "/service",
  },
  {
    name: "Post Operative Care",
    link: "/service",
  },
  {
    name: "Pediatric Palliative care",
    link: "/service",
  },
  {
    name: "Paralytic Care",
    link: "/service",
  },
];
const PrivateNursing_list = () => {
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
