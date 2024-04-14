import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Assistance from "../assets/faq.png";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Tab from "react-bootstrap/Tab";
const AboutUs = () => {
  return (
    <section className="assistance">
      <Container>
        <Row>
          <Col className="assistence_img">
            <img src={Assistance} className=" rounded" />
          </Col>

          <Col>
            <Row className="mb-4">
              <Col>
                <h2 className="fs-3 fw-semibold">About Us</h2>
                <p>
                  At Carehub Healthcare, we offer a wide range of comprehensive
                  services designed to cater to the unique needs of our clients.
                </p>
              </Col>
            </Row>
            <Row className="">
              <Col>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col>
                      <Nav variant="underline" className="">
                        <Nav.Item className="tabStyle">
                          <Nav.Link eventKey="first">Mission</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="tabStyle">
                          <Nav.Link eventKey="second">Vission</Nav.Link>
                        </Nav.Item>
                      </Nav>

                      <Tab.Content className="tabContent">
                        <Tab.Pane eventKey="first">
                          <p>
                            At Carehub Healthcare, we offer a wide range of
                            comprehensive services designed to cater to the
                            unique needs of our clients.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>
                            At Carehub Healthcare, we offer a wide range of
                            comprehensive services designed to cater to the
                            unique needs of our clients.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
