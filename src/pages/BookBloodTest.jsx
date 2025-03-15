import React from "react";
import ScrollToTop from "../components/ScrollTop";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Assistance from "../assets/faq.png";
import { Link } from "react-router-dom";
import { FaRegFile } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import SelectTest from "../components/SelectTest";

const BookBloodTest = () => {
  return (
    <>
      <ScrollToTop />
      <section className="bookbloodtest_banner">
        <Container>
          <Row className="">
            <Col lg={5} className="bookbloodtest_img">
              <img src={Assistance} className=" rounded" />
            </Col>
            <Col lg={1}></Col>
            <Col className="align-self-center">
              <div>
                <h2 className="fs-2 fw-bold">Create your own test</h2>
                <p>
                  Customize your own blood test package based on your own health
                  needs and benefit from flexible pricing.
                </p>
              </div>
              <div className="bookbloodtest_tag p-3">
                <Row>
                  <Col className="border-end border-dark" lg={5}>
                    <Row>
                      <Col lg={2}>
                        <FaRegFile />
                      </Col>
                      <Col className="p-0">
                        <p className="fw-semibold m-0">100+ Tests</p>
                        <p className="m-0">with certified labs</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={7}>
                    <Row>
                      <Col lg={2}>
                        <FiTruck />
                      </Col>
                      <Col className="p-0">
                        <p className="fw-semibold m-0">
                          Free at-home sample collection
                        </p>
                        <p className="m-0">Above AED 350</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="header">
              <h2 className="fs-2 fw-bold">
                Select our flexible price plan that save your money
              </h2>
              <p>
                Experience a variety of features aimed at improving your blood
                testing process, all at a cost that suits your budget.
              </p>
            </Col>
          </Row>
          <Row className="g-3">
            <Col className="price_card px-4 me-2">
              <div>
                <h4>140 AED</h4>
                <p>140 AED</p>
              </div>
              <div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
              </div>
              <div>
                <button className="custom-button">Book a Test</button>
              </div>
            </Col>
            <Col className="price_card px-4 me-2">
              <div>
                <h4>140 AED</h4>
                <p>140 AED</p>
              </div>
              <div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
              </div>
              <div>
                <button className="custom-button">Book a Test</button>
              </div>
            </Col>
            <Col className="price_card popular px-4 me-2">
              <div>
                <h4>140 AED</h4>
                <p>140 AED</p>
              </div>
              <div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
              </div>
              <div>
                <button className="custom-button">Book a Test</button>
              </div>
            </Col>
            <Col className="price_card px-4">
              <div>
                <h4>140 AED</h4>
                <p>140 AED</p>
              </div>
              <div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
                <div className="align-items-center mb-2">
                  <FaRegCircleCheck className="me-2" />
                  Complete Blood Count(CBC)
                </div>
              </div>
              <div>
                <button className="custom-button">Book a Test</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SelectTest />
    </>
  );
};
export default BookBloodTest;
