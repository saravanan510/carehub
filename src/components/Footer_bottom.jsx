import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillEnvironment } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
const Footer_bottom = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg={3}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
          </Col>
          <Col md={6} lg={3}>
            <h6>Navigation</h6>
            <ul className="custom-ul">
              <li>Home</li>
              <li>Page</li>
              <li>About Us</li>
              <li>Services</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h6>Quick Link</h6>
            <ul className="custom-ul">
              <li>Contact Us</li>
              <li>FAQ's</li>
              <li>Booking</li>
              <li>Pages</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h6>Services</h6>
            <ul className="custom-ul">
              <li>Palliative Care</li>
              <li>Private Nursing Care</li>
              <li>24 Hours In-Home Care</li>
              <li>Post-Hospitalization</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3 mb-4">
          <Col
            className="footer_contact d-flex align-items-center"
            lg={3}
            md={6}
            sm={12}
          >
            <AiFillEnvironment className="fs-4 me-2" />
            <h6 className="mb-0">London Eye, London UK</h6>
          </Col>
          <Col
            className=" footer_contact d-flex align-items-center"
            lg={3}
            md={6}
            sm={12}
          >
            <MdCall className="fs-4 me-2" />
            <h6 className="mb-0">(+081) 5678 1234</h6>
          </Col>
          <Col
            className="footer_contact d-flex align-items-center"
            lg={3}
            md={6}
            sm={12}
          >
            <IoMdMail className="fs-4 me-2" />
            <h6 className="mb-0">mail@nursee.com</h6>
          </Col>
          <Col
            className="footer_contact d-flex align-items-center"
            lg={3}
            md={6}
            sm={12}
          >
            <FaFacebook className="fs-4 me-3" />
            <IoLogoTwitter className="fs-4 me-3" />
            <IoLogoYoutube className="fs-4 me-3" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <small>© 2022 Carehub • All Rights Reserved</small>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer_bottom;
