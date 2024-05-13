import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillEnvironment } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer_bottom = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg={3}>
            <p>
              At CareHub rehabilitation experts create specialized treatment
              plans to meet each patient’s individual needs.
            </p>
          </Col>
          <Col md={6} lg={3}>
            <h6>Navigation</h6>
            <ul className="custom-ul">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/aboutus"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h6>Quick Link</h6>
            <ul className="custom-ul">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/aboutus"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h6>Services</h6>
            <ul className="custom-ul">
              <li>
                <Link to={"/private-nursing"}>Private Nursing</Link>
              </li>
              <li>
                <Link to={"/post-operative-care"}>Post Operative Care</Link>
              </li>
              <li>
                <Link to={"/ventilator-care"}>VentilatorCare</Link>
              </li>
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
            <h6 className="mb-0">Al-Karama, Dubai, U.A.E</h6>
          </Col>
          <Col
            className=" footer_contact d-flex align-items-center"
            lg={3}
            md={6}
            sm={12}
          >
            <MdCall className="fs-4 me-2" />
            <h6 className="mb-0">+971 58 532 4900</h6>
          </Col>
          <Col
            className="footer_contact d-flex align-items-center"
            lg={3}
            md={6}
            sm={12}
          >
            <IoMdMail className="fs-4 me-2" />
            <h6 className="mb-0">info@carehubuae.com</h6>
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
