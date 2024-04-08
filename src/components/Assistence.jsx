import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Assistance from "../assets/faq.png";
import { LiaUserNurseSolid } from "react-icons/lia";
const Assistence = () => {
  return (
    <section className="assistance">
      <Container>
        <Row>
          <Col lg={8}>
            <Row className="mb-4">
              <Col>
                <h2 className="fs-3 fw-semibold">What Service We Offer</h2>
                <p>
                  At Carehub Healthcare, we offer a wide range of comprehensive
                  services designed to cater to the unique needs of our clients.
                </p>
              </Col>
            </Row>
            <Row className="">
              <Col className="pe-6" md={6} sm={12}>
                <LiaUserNurseSolid className="fs-1 mb-3 assistence_icon" />
                <h3 className="fs-6 fw-semibold">
                  Private Nursing Care Services
                </h3>
                <p>
                  At Carehub Healthcare, we offer a wide range of comprehensive
                  services.
                </p>
              </Col>

              <Col md={6} sm={12}>
                <LiaUserNurseSolid className="fs-1 mb-3 assistence_icon" />
                <h3 className="fs-6 fw-semibold">
                  Private Nursing Care Services
                </h3>
                <p>
                  At Carehub Healthcare, we offer a wide range of comprehensive
                  services.
                </p>
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col lg={3} className="assistence_img">
            <img src={Assistance} className=" rounded" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Assistence;
