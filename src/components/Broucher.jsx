import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FAQ from "../assets/faq.png";
const Broucher = () => {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col className="broucher_header">
            <h2 className="fs-3 fw-semibold">Broucher</h2>
            <p>
              At Carehub Healthcare, we offer a wide range of comprehensive
              services designed to cater to the unique needs of our clients.
            </p>
            <button type="button" className="custom-button border border-0">
              Downloads
            </button>
          </Col>
          <Col md={12} lg={6}>
            <img src={FAQ} width="100%" alt="" srcset="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Broucher;
